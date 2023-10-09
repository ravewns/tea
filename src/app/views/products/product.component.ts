import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogCartService} from "../../service/catalog-cart.service";
import {CartType} from "../../types/cart.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  tea: CartType;
  constructor(private ActivateRoute: ActivatedRoute, private catalogCard: CatalogCartService, private router: Router) {
    this.tea = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  goToOrder(title: string): void {
    this.tea.title = title;
    this.router.navigate(['/order'], {queryParams: {tea: title}});
  }

  ngOnInit() {
    this.ActivateRoute.params.subscribe((params) => {
      if (params['id']) {
        this.catalogCard.getCart(+params['id'])
          .subscribe({
            next: (data) => {
              this.tea = data;
            },
            error: (error) => {
              this.router.navigate(['/'])
            }
          });
      }
    })
  }
}
