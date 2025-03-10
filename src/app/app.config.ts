import { ApplicationConfig, Injectable, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// @Injectable({providedIn: 'root'})
// export class Resource2 {
//   test: number = 0;
//   method() {
//     console.log('Appel de la méthode');
//   }
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: 'resource1', useValue: 42 },
    provideHttpClient()
    // {provide: Resource2, useClass: Resource2}
    // Resource2
  ],
};

