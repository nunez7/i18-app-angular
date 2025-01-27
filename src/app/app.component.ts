import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguajeService } from './service/languaje.service';

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

  cookieLogEffect = effect(() => {
    console.log({ cookie: this.cookie.get('lang') });

    const lan = this.cookie.check('lang') ? this.cookie.get('lang') : 'en';

    this.languajeService.changeLanguage(lan);
  });
}
