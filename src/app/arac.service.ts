import { Injectable } from '@angular/core';
import { Arac } from './arac-model';

@Injectable({
  providedIn: 'root'
})
export class AracService {

  araclar: Arac[] = [ {
    id: 'r1',
    ad:'BMW X3',
    resim:'assets/img/640px-2018_BMW_X3_xDrive30i.jpg',
    ozellik:['Otomatik','Dizel','2018 Model']
  },
  {
    id: 'r2',
    ad:'Skoda Kodiaq',
    resim:'assets/img/640px-2018_Skoda_Kodiaq_Scout_TDi_SCR_4X4_2.0_Front.jpg',
    ozellik:['Otomatik', 'Benzin','2019 Model']
  },
  {
    id: 'r3',
    ad:'Audi Q5',
    resim:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Audi_Q5L_02_China_2019-03-12.jpg/640px-Audi_Q5L_02_China_2019-03-12.jpg',
    ozellik:['Otomatik','Dizel','2020 Model']
  },
  {
    id: 'r4',
    ad:'Peugeot 5008',
    resim:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2019_Peugeot_5008_Allure.jpg/640px-2019_Peugeot_5008_Allure.jpg',
    ozellik:['Otomatik','Dizel','2021 Model']
  },
  ];

  constructor() { }
}
