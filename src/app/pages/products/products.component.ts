import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguajeSelectorComponent } from "../../components/languaje-selector/languaje-selector.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, LanguajeSelectorComponent],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent { }
