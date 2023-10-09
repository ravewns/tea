import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class postService {

  constructor(private http: HttpClient) { }

  sendPost(json: string) {
    return this.http.post<{ success: boolean, message?:string }>('https://testologia.site/order-tea', json)
      .subscribe( response => {
        if (response.success && !response.message) {
          document.getElementById('orderForm')!.style.display = 'none';
          document.getElementById('orderStatus')!.innerText = 'Спасибо за заказ!';
          document.getElementById('order-info')!.style.display = 'block';
          document.getElementById('orderStatus')!.style.color = 'green';
        } else {
          document.getElementById('orderForm')!.style.display = 'none';
          document.getElementById('orderStatus')!.innerText = 'Произошла ошибка. Попробуйте еще раз.';
          document.getElementById('orderStatus')!.style.color = 'red';
        }
      })
  }

}






