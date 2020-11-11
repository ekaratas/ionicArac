import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AracDetayPageRoutingModule } from './arac-detay-routing.module';

import { AracDetayPage } from './arac-detay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AracDetayPageRoutingModule
  ],
  declarations: [AracDetayPage]
})
export class AracDetayPageModule {}
