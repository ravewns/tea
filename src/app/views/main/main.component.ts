import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private observable: Observable<string>

  constructor() {

    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('');
      }, 10000)
    })
  }


  ngOnInit() {

    function modalOpen(): void {
      const popup: HTMLElement | null = document.getElementById('exampleModal');
      if (popup) {
        popup.style.display = 'block';
      }
    }

    this.observable.subscribe((param: string) => {
      modalOpen();
    });
  }

  modalClose() {
    const popup: HTMLElement | null = document.getElementById('exampleModal');
    if (popup) {
      popup.style.display = 'none';
    }
  }

}
