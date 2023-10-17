import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartType} from "../../../../types/cart.type";
import {orderGet} from "../../../../service/order-get"

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  teas: CartType[] = [];
  constructor(private http: HttpClient, private getService: orderGet) {

  }
  ngOnInit() {
    this.getService.getTea().subscribe((data:any) => this.teas = data);
  }
}
