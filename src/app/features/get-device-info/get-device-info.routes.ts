import { Routes } from '@angular/router';

export const GET_DEVICE_INFO_ROUTES: Routes = [
  {
    path: 'get-device-info',
    loadComponent: () =>
      import('./pages/get-device-info/get-device-info.component').then(
        (m) => m.GetDeviceInfoComponent
      ),
  },
];
