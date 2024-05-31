import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];

  constructor() { 
    this.loadItems();
  }

  private loadItems(){
    const cart = localStorage.getItem('cart');
    if(cart){
      this.items = JSON.parse(cart);
    }
  }

  private saveItems() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getCount(){
    if(this.items.length === 0){
      return 0;
    }

    return this.items
    .map(i => i.quantity)
    .reduce((a, b) => a +b, 0); 
  }

  addItem(item: CartItem){
    const index = this.items.findIndex(i => i.id === item.id);

    if(index >= 0){
      this.items[index].quantity += item.quantity;
      this.items[index].total = this.items[index].quantity * this.items[index].price;
    }else {
      item.total = item.quantity * item.price;
      this.items.push(item);
    }

    this.saveItems();
  }

  deleteItem(id: number){
    this.items = this.items
    .filter(i => i.id !== id);

    this.saveItems();
  }

  getItems() {
    return of(this.items);
  }
}
