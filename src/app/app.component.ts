import { Component, effect, Inject, inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguajeService, SERVER_LANG_TOKEN } from './service/languaje.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'i18n-app-angular';

  cookie = inject(SsrCookieService);
  languajeService = inject(LanguajeService);

  constructor(
    @Optional()
    @Inject(SERVER_LANG_TOKEN)  langServer: string) {
    
      const lang =
      langServer ??
      (this.cookie.check('lang') ? this.cookie.get('lang') : 'en');

      this.languajeService.changeLanguage(lang);
  }
}
