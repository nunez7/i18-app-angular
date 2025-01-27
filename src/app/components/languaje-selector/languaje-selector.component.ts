import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'languaje-selector',
  standalone: true,
  imports: [],
  templateUrl: './languaje-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguajeSelectorComponent {

  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);


 }
