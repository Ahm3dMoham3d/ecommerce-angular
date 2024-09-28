import { Component , Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
 @Input() id = 0
 @Input() title = ''
 @Input() price = 0
 @Input() category = ''
 @Input() image = ''
 @Input() rate = 0
}
