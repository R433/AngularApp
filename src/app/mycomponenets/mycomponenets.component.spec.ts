import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponenetsComponent } from './mycomponenets.component';

describe('MycomponenetsComponent', () => {
  let component: MycomponenetsComponent;
  let fixture: ComponentFixture<MycomponenetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycomponenetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomponenetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
