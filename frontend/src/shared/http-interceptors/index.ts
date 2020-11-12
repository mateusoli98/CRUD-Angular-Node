import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './AppInterceptor';

export const httpInterceptorsProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
];
