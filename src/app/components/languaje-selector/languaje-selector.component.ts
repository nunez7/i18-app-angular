import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LanguajeService } from '../../service/languaje.service';

@Component({
  selector: 'languaje-selector',
  standalone: true,
  imports: [],
  templateUrl: './languaje-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguajeSelectorComponent {

  languajeService = inject(LanguajeService);

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
