import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class LanguajeService {
  cookie = inject(SsrCookieService);
  translate = inject(TranslateService);
  currentLang = signal('lang') || 'en';

  changeLanguage(lang: string){
    this.cookie.set('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.currentLang.set(lang);
    //TODO Cambio de idioma
  }

}
