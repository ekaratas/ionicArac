import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AracDetayPage } from './arac-detay.page';

const routes: Routes = [
  {
    path: '',
    component: AracDetayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AracDetayPageRoutingModule {}
