import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguajeSelectorComponent } from "../../components/languaje-selector/languaje-selector.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basic-plan',
  standalone: true,
  imports: [LanguajeSelectorComponent, RouterLink],
  templateUrl: './basic-plan.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPlanComponent { }
