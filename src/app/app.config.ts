import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {SsrCookieService} from 'ngx-cookie-service-ssr';
import {provideTranslateService, TranslateLoader} from "@ngx-translate/core";
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './i18n/', '.json'); // Ruta de las traducciones
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch()), // Configuración de HttpClient
    //Cookies
    SsrCookieService,
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient], // Inyección de dependencia de HttpClient
      },
    })
  ]
};
