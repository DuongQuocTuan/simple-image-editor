import { Routes } from '@angular/router';

export const IMAGE_EDITOR_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/simple-image-editor/simple-image-editor.component').then(
        (m) => m.SimpleImageEditorComponent
      ),
  },
];
