import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LugarNovoPage } from './lugar-novo.page';

describe('LugarNovoPage', () => {
  let component: LugarNovoPage;
  let fixture: ComponentFixture<LugarNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarNovoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LugarNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
