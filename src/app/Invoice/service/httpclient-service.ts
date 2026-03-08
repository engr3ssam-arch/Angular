import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Products } from '../../shared/interface/products';
import { ProductService } from './product-service';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {

private apiUrl = '';

constructor (private http:HttpClient) {}


getProduct():Observable<Products[]>{
  return this.http.get<Products[]>(this.apiUrl);
}


addProduct(product: Products): Observable<Products> {
  return this.http.post<Products>(this.apiUrl, product);
}

  updateProduct(id: number, product: Products): Observable<Products> {
    return this.http.put<Products>(`${this.apiUrl}/${id}`, product);
  }

  
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }




  
}


