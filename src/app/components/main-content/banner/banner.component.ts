import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  // @ViewChild('div', { static: true }) div!: ElementRef;
  // fatchData() {
  //   fetch('https://onlinestore-challenge.onrender.com/api/products/1')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.div.nativeElement.innerText = JSON.stringify(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.error('Error:', error));
  // }
}
