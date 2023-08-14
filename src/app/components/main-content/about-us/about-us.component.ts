import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  cards = [
    {
      title: 'Швидко',
      content:
        'За допомогою нашого сервісу записатися на прийом можна в один клік ',
    },
    {
      title: 'Конфіденційно',
      content:
        'Уся інформація про Вас та Ваші данні залишаєиться конфіденційною',
    },
    { title: 'Зручно', content: 'Швидкий пошук спеціаліста за Вашим запитом' },
  ];
}
