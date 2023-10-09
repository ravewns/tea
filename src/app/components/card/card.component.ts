import {Component, Input} from '@angular/core';
import {CartType} from "../../types/cart.type";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() tea: CartType;

  constructor() {
    this.tea = {
      id: 0,
      image: 'string',
      title: 'string',
      price: 0,
      description: 'string'
    }
  }
}
