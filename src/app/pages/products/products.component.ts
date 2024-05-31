import { Component } from '@angular/core';
import { ProductsService } from '../../api/services/products.service';
import { Product } from '../../api/model/product';
import { ProductComponent } from "./product/product.component";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
    selector: 'app-pages-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [ProductsComponent, ProductComponent,
      MatButtonToggleModule, MatProgressSpinnerModule]
})
export class ProductsComponent {

  products: Product[] = [];
  categories: Product[] = [];

  constructor(private _productsService: ProductsService){
    this._productsService.getAll().subscribe({
      next: data => {
        this.products = data.slice(54, 130);
      },
      error: err => {
        console.log("ERROR: ",err);
      }
    });

    this._productsService.getAllCategories().subscribe({
      next: data => {
        this.categories = data;
      },
      error: err => {
        console.log("Error: ",err);
      }
    });
  }

  onCategoryChange(value: string){
    this._productsService.getAllCategories().subscribe({
      next: data => {
        this.categories = data;
      },
      error: err => {
        console.log("Error: ",err);
      }
    });
  }
  }

