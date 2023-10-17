import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {validator} from "../../components/common/validators/validator";
import {ActivatedRoute, Params} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {orderPost} from "../../service/order-post";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {



  signInForm = new FormGroup({
    name: new FormControl('', [validator('^[a-zA-Zа-яА-Я]+$'), Validators.required]),
    last_name: new FormControl('', [validator('^[a-zA-Zа-яА-Я]+$'), Validators.required]),
    phone: new FormControl(null, [validator('^[\\+\\.]?[0-9\\-\\+]{9,11}$'), Validators.required]),
    country: new FormControl('', [validator('^[a-zA-Zа-яА-Я]+$'), Validators.required]),
    zip: new FormControl('', [validator('^\\d{1,6}$'), Validators.required]),
    product: new FormControl(''),
    address: new FormControl('', [validator('^[a-zA-Zа-яА-Я0-9\\s\\-/]+$'), Validators.required]),
    comment: new FormControl('')
  })

  constructor(private activatedRoute: ActivatedRoute, public http: HttpClient, private postService: orderPost) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['tea']) {
        this.signInForm.get('product')?.setValue(params['tea']);
      }
    });
  }

  order() {
    let body = {
      name: this.signInForm.get('name')?.value,
      last_name: this.signInForm.get('last_name')?.value,
      phone: this.signInForm.get('phone')?.value,
      country: this.signInForm.get('country')?.value,
      zip: this.signInForm.get('zip')?.value,
      product: this.signInForm.get('product')?.value,
      address: this.signInForm.get('address')?.value,
      comment: this.signInForm.get('comment')?.value,
    };

    let json = JSON.stringify(body);

    this.postService.sendPost(json);

  }

}
