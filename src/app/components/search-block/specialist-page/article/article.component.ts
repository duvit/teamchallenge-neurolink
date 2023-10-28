import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  articles = [
    {
      title: 'Вплив дитинства на наше доросле життя',
      author: 'Ольга Іванова',
      text: 'Є думка, що всі наші травми з дитинства чи від батьків. Насправді це не так, ми можемо стикнутись із травматичними ситуаціями в дорослому віці,  але дитячі травми є, як правило, значно глибшими.',
      date: 'Травень 2023',
      img: '../../../../../assets/articles/article_img.png',
    },
    {
      title: 'Вплив дитинства на наше доросле життя',
      author: 'Ольга Іванова',
      text: 'Є думка, що всі наші травми з дитинства чи від батьків. Насправді це не так, ми можемо стикнутись із травматичними ситуаціями в дорослому віці,  але дитячі травми є, як правило, значно глибшими.',
      date: 'Травень 2023',
      img: '../../../../../assets/articles/article_img.png',
    },
    {
      title: 'Вплив дитинства на наше доросле життя',
      author: 'Ольга Іванова',
      text: 'Є думка, що всі наші травми з дитинства чи від батьків. Насправді це не так, ми можемо стикнутись із травматичними ситуаціями в дорослому віці,  але дитячі травми є, як правило, значно глибшими.',
      date: 'Травень 2023',
      img: '../../../../../assets/articles/article_img.png',
    },
  ];
}
