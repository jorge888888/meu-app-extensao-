import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProdutos() {
    return this.http.get<any[]>(this.url);
  }
}