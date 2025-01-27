import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguajeService } from '../../service/languaje.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'languaje-selector',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './languaje-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguajeSelectorComponent {

  languajeService = inject(LanguajeService);
  currentLang = this.languajeService.currentLang;

  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  changeLanguage(event: Event){
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.languajeService.changeLanguage(lang);
  }
 }
