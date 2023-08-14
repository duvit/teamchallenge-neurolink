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
      content:
        'Ми пропонуємо лише кваліфікованих спеціалістів, які проходять чіткий контроль своїх знань та навичок.',
    },
    {
      title: 'Оберіть місце і час',
      content:
        'Обирайте комфортне для себе місце та час консультації, скористуйтеся онлайн-календарем фахівця. Ви можете змінити дату та час за 24 години безкоштовно.',
    },
    {
      title: 'Підтвердіть сеанс',
      content:
        'Оплатіть консультацію і ми надішлемо підтвердження та нагадування за день до сеансу.',
    },
    {
      title: 'Керуйте процесом',
      content:
        'Керуйте записами в особистому кабінеті, переглядайте свою історію сеансів та з легкістю плануйте наступні.',
    },
  ];

  cardsImgs = [
    '../../../../assets/how-it-works-item__img_1.svg',
    '../../../../assets/how-it-works-item__img_2.svg',
    '../../../../assets/how-it-works-item__img_3.svg',
    '../../../../assets/how-it-works-item__img_4.svg',
  ];

  getClasses(index: number) {
    if (index % 2 === 0) {
      return 'how-it-works-item-even';
    } else {
      return 'how-it-works-item-odd';
    }
  }
}
