import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/image-editor/image-editor.routes').then(
        (m) => m.IMAGE_EDITOR_ROUTES
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/get-device-info/get-device-info.routes').then(
        (m) => m.GET_DEVICE_INFO_ROUTES
      ),
  },
];
