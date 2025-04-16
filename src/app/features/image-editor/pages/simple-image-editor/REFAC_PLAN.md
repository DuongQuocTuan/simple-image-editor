# Refactoring Plan: SimpleImageEditorComponent

## Objective

Refactor `SimpleImageEditorComponent` to reduce repetitive code by:

- Replacing multiple mode booleans with a single `currentMode` property.
- Keeping drawing methods separate for clarity and future service extraction.
- Preparing the code for possible future extraction of mode logic into services.
- Ensuring no changes to the UI/UX.

---

## Clarification: "Minor Changes for Simplification"

- Renaming variables for clarity.
- Grouping related logic into helper functions or classes.
- Removing redundant code paths.
- Adjusting internal state management (e.g., using an enum or string for mode).
- Extracting mode-specific logic into separate services or files (future), as long as user-facing behavior remains unchanged.

**No changes to the UI, features, or user workflows.**

---

## Refactoring Steps

### 1. Replace Mode Booleans with `currentMode`

- Introduce a `currentMode: 'arrow' | 'line' | 'square' | 'ellipse' | 'customText' | 'delete' | null` property.
- Refactor all mode-enabling methods to set `currentMode` instead of multiple booleans.
- Update all checks in event handlers to use `currentMode`.

### 2. Keep Drawing Methods Separate

- Maintain individual methods for drawing each shape (e.g., `drawSquare`, `drawEllipse`, etc.) for clarity and easier future service extraction.

### 3. Prepare for Service Extraction (Optional/Future)

- Structure mode-specific logic so it can be easily moved to separate services later (e.g., group related methods, avoid cross-dependencies).

### 4. Utility Functions

- Add helper functions for common tasks (e.g., extracting mouse coordinates, resetting state).

### 5. Minimal UI/UX Impact

- Ensure all changes are internal and do not affect the user interface or experience.

---

## Mermaid Diagram: New Mode Management

```mermaid
classDiagram
    class SimpleImageEditorComponent {
        +currentMode: string
        +setMode(mode: string)
        +onMouseDown(event)
        +onMouseMove(event)
        +onMouseUp(event)
        +drawSquare(element)
        +drawEllipse(element)
        +drawLine(element)
        +drawArrow(element)
        +drawText(element)
    }
    SimpleImageEditorComponent --> ModeService (future)
```

---

## Notes

- Drawing methods remain separate for clarity.
- Mode logic will be grouped for easier future extraction into services.
- No changes to UI/UX or user workflows.
