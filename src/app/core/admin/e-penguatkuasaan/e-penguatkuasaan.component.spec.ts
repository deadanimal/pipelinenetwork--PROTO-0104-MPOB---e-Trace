/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EPenguatkuasaanComponent } from './e-penguatkuasaan.component';

describe('EPenguatkuasaanComponent', () => {
  let component: EPenguatkuasaanComponent;
  let fixture: ComponentFixture<EPenguatkuasaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPenguatkuasaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPenguatkuasaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
