/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TindakanEKompaunComponent } from './tindakan-e-kompaun.component';

describe('TindakanEKompaunComponent', () => {
  let component: TindakanEKompaunComponent;
  let fixture: ComponentFixture<TindakanEKompaunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TindakanEKompaunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TindakanEKompaunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
