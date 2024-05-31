import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { CartService } from '../../../api/services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule,
    RouterLink
  ],
  templateUrl: './cart-button.component.html',
  styleUrl: './cart-button.component.css'
})
export class CartButtonComponent {

    constructor(private cartService: CartService){
      
    }

    get count(){
      return this.cartService.getCount();
    }
}
