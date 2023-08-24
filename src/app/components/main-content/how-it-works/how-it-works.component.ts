import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent {
  cards = [
    {
      title: 'Оберіть психолога який Вам сподобався',
      img: '../../../../assets/how-it-works-item__img_1.svg',
      content:
        'Ми пропонуємо лише кваліфікованих спеціалістів, які проходять чіткий контроль своїх знань та навичок.',
    },
    {
      title: 'Оберіть місце і час',
      img: '../../../../assets/how-it-works-item__img_2.svg',
      content:
        'Обирайте комфортне для себе місце та час консультації, скористуйтеся онлайн-календарем фахівця. Ви можете змінити дату та час за 24 години безкоштовно.',
    },
    {
      title: 'Підтвердіть сеанс',
      img: '../../../../assets/how-it-works-item__img_3.svg',
      content:
        'Оплатіть консультацію і ми надішлемо підтвердження та нагадування за день до сеансу.',
    },
    {
      title: 'Керуйте процесом',
      img: '../../../../assets/how-it-works-item__img_4.svg',
      content:
        'Керуйте записами в особистому кабінеті, переглядайте свою історію сеансів та з легкістю плануйте наступні.',
    },
  ];

  getClasses(index: number) {
    if (index % 2 === 0) {
      return 'odd';
    } else {
      return 'even';
    }
  }
}
