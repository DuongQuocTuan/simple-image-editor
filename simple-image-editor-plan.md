# Touch-Scroll Coexistence Plan for Simple Image Editor

This document outlines the plan to enable single-finger drawing and two-finger panning on mobile devices.

```mermaid
flowchart TB
  Start[Touchstart]
  Start -->|1 finger| DrawStart[Dispatch draw logic]
  Start -->|2+ fingers| ScrollStart[Store initial centroid & scrollOffset]
  DrawStart --> TouchMove1[Touchmove → redraw preview → preventDefault]
  ScrollStart --> TouchMove2[Touchmove → compute centroid Δ → container.scrollBy(–dx,–dy)]
  TouchMove1 --> TouchEnd1[Touchend → finalize shape]
  TouchMove2 --> TouchEnd2[Touchend → clear scroll state]
```

## Steps

1. Wrap `<canvas>` in a scrollable container (`overflow: auto`) or use page scroll.
2. Add CSS:
   ```css
   .canvas-container {
     touch-action: pan-x pan-y;
   }
   ```
3. Update touch handlers in `SimpleImageEditorComponent`:
   - In `onTouchStart`, if `event.touches.length === 1`, run existing draw logic and `preventDefault()`.
   - If `event.touches.length > 1`, do not `preventDefault()`, compute the two-finger centroid delta, and call `.scrollBy()` on the wrapper.
4. Optionally switch to pointer events (`pointerdown`/`pointermove`) with proper `touch-action`.
5. Test on device: single-finger draws, two-finger pans.
