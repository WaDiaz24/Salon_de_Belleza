import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { CartItem } from '../../api/model/cart-item';
import { CartService } from '../../api/services/cart.service';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatTableModule, CurrencyPipe, DecimalPipe
    , MatIconModule, MatButtonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items: CartItem[] = [];
  displayedColumns = ["image_link", "name", "price", "quantity", "total", "actions"]

  constructor(private cartSeervice: CartService){
    this.cartSeervice.getItems()
    .subscribe(data => {
      this.items = data;
    });
  }

  deleteItem(id: number){
    this.cartSeervice.deleteItem(id);
    this.items = this.items.filter(item => item.id !== id);
  }
}
