import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LugarDetalhePage } from './lugar-detalhe.page';

describe('LugarDetalhePage', () => {
  let component: LugarDetalhePage;
  let fixture: ComponentFixture<LugarDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LugarDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
