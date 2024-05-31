import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //private BASE_URL = 'https://fakestoreapi.com/products'
  //explicito, implicito
  private BASE_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json'
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Product[]>(`${this.BASE_URL}`) 
  }

  getById(id: number){
    return this.http.get<Product>(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
  }

  getAllCategories(){
    return this.http.get<Product[]>('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
  }

  getAllByCategories(category: string){
    return this.http.get<string[]>(`${this.BASE_URL}/category/${category}`);
  }
}
