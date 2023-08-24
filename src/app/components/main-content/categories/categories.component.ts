import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories = [
    {
      title: 'Cиндром вигорання',
      img: '../../../../assets/categories/syndrom_vigorannya.svg',
      description:
        'Виснаження емоційних та особистісних ресурсів майже завжди приводять до синдрому вигорання. Часто він розвивається на тлі...',
    },
    {
      title: 'Тривога',
      img: '../../../../assets/categories/trivoga.svg',
      description:
        "На відміну від інших сильних переживань, тривога завжди пов'язана зі страхом, свідомим або несвідомим...",
    },
    {
      title: 'Депресія',
      img: '../../../../assets/categories/depression.svg',
      description:
        'Депресія по-різному впливає на людей і спричиняє різні симптоми: від тривалого поганого настрою, до втрати інтересу до усього...',
    },
    {
      title: 'Самооцінка',
      img: '../../../../assets/categories/samootsinka.svg',
      description:
        'Самооцінка не є вродженою, а поступово формується з раннього дитинства. На її формування найістотніше впливають у молодшому віці...',
    },
    {
      title: 'Стрес',
      img: '../../../../assets/categories/stress.svg',
      description:
        'Стрес -  це захисна реакція організму на зовнішні подразники. Вона проявляється психічно, фізично, емоційно ...',
    },
    {
      title: 'Стосунки',
      img: '../../../../assets/categories/relations.svg',
      description:
        "Якісні стосунки благотворно впливають на наше здоров'я, зміцнюють імунітет, зменшують негативний вплив стресу...",
    },
    {
      title: 'Апатія',
      img: '../../../../assets/categories/apatia.svg',
      description:
        'Апатія виникає у результаті стресів. Усвідомлення плину часу, який витрачається непродуктивно, призводить до пригніченого стану...',
    },
    {
      title: 'Гендерна рівність',
      img: '../../../../assets/categories/gender-rivnist.svg',
      description:
        'Гендерна рівність – це найперше про справедливість, однаковий доступ до ресурсів і влади...',
    },
  ];
}
