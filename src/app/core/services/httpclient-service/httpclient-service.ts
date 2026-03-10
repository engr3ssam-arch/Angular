import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../../../shared/interface/products';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {

constructor (private http:HttpClient) {}


getProduct():Observable<Products[]>{
  return this.http.get<Products[]>('');
}


addProduct(product: Products): Observable<Products> {
  return this.http.post<Products>('', product);
}

  updateProduct(id: number, product: Products): Observable<Products> {
    return this.http.put<Products>(`''/${id}`, product);
  }

  
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`''/${id}`);
  }




  
}


