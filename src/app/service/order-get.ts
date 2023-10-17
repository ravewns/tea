import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class orderGet {
  constructor(private http: HttpClient) {
  }

  getTea() {
      return this.http.get('https://testologia.site/tea')
  }
}
