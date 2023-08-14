import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories = [
    { text: 'Cиндром вигорання' },
    { text: 'Тривога' },
    { text: 'Депресія' },
    { text: 'Самооцінка' },
    { text: 'Стрес' },
    { text: 'Стосунки' },
    { text: 'Апатія' },
    { text: 'Гендерна рівність' },
  ];

  bckgImgs = [
    `url('../../../../assets/Blob_Shape_1.png')`,
    `url('../../../../assets/Blob_Shape_2.png')`,
    `url('../../../../assets/Blob_Shape_3.png')`,
    `url('../../../../assets/Blob_Shape_4.png')`,
    `url('../../../../assets/Blob_Shape_5.png')`,
    `url('../../../../assets/Blob_Shape_6.png')`,
    `url('../../../../assets/Blob_Shape_7.png')`,
    `url('../../../../assets/Blob_Shape_8.png')`,
  ];
}
