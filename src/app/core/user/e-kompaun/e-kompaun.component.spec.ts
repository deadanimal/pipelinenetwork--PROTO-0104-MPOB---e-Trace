/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EKompaunComponent } from './e-kompaun.component';

describe('EKompaunComponent', () => {
  let component: EKompaunComponent;
  let fixture: ComponentFixture<EKompaunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EKompaunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EKompaunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
