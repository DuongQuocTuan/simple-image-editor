import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/image-editor/image-editor.routes').then(
        (m) => m.IMAGE_EDITOR_ROUTES
      ),
  },
];
