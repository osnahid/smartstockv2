import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsAccountComponent } from './lists-account.component';

describe('ListsAccountComponent', () => {
  let component: ListsAccountComponent;
  let fixture: ComponentFixture<ListsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
