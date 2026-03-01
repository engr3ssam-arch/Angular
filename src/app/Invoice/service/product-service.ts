import { Injectable } from '@angular/core';
import { Products } from '../../shared/interface/products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private product:Products[] =[
  { productId: "L-001",  productName:'Laptop DELL',    productPrice: 50000 },
  { productId: "L-002", productName:'Laptop HP',      productPrice: 45000 },
  { productId: "L-003",  productName:'Laptop LENOVO',  productPrice: 35000 },
  { productId: "H-001", productName:'Head Phone',     productPrice: 5000 },
  { productId: "M-001", productName:'Mobile Samsung', productPrice: 15000 },
  { productId: "M-002",  productName:'Mobile Apple',   productPrice: 100000 }   

  ]



  constructor() { }

  getProducts(): Observable<Products[]> {
    return of(this.product); 
  }

  
  getProductById(id: string): Products | undefined {
    return this.product.find(p => p.productId === id);
  }
}
