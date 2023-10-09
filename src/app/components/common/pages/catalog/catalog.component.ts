import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartType} from "../../../../types/cart.type";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  teas: CartType[] = [];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('https://testologia.site/tea')
      .subscribe((data: any) => {
        this.teas = data;
      })
  }
}
