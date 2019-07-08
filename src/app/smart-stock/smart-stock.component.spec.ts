import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartStockComponent } from './smart-stock.component';

describe('SmartStockComponent', () => {
  let component: SmartStockComponent;
  let fixture: ComponentFixture<SmartStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
