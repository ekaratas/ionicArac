import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AracDetayPage } from './arac-detay.page';

describe('AracDetayPage', () => {
  let component: AracDetayPage;
  let fixture: ComponentFixture<AracDetayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AracDetayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AracDetayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
