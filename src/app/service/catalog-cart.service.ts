import {Injectable, OnInit} from '@angular/core';
import {CartType} from "../types/cart.type";
import {HttpClient} from "@angular/common/http";
import {map, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogCartService {

  constructor(private http: HttpClient) {
  }

  getCart(id: number): Observable<CartType> {
    return this.http.get<CartType>(`https://testologia.site/tea?id=${id}`)
  }

}



