import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpatiantComponent } from './addpatiant.component';

describe('AddpatiantComponent', () => {
  let component: AddpatiantComponent;
  let fixture: ComponentFixture<AddpatiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpatiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpatiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
