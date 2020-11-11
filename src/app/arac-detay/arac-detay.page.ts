import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arac } from '../arac-model';
import { AracService } from '../arac.service';


@Component({
  selector: 'app-arac-detay',
  templateUrl: './arac-detay.page.html',
  styleUrls: ['./arac-detay.page.scss'],
})
export class AracDetayPage implements OnInit {

arac: Arac;

  constructor(public activatedRoute:ActivatedRoute, public aracService:AracService) { }

  ngOnInit() {
    this.arac = this.aracGetir(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.arac.ad);
  }

  aracGetir(deger): Arac 
  {
    return this.aracService.araclar.find(bul => bul.id === deger);
  }

}
