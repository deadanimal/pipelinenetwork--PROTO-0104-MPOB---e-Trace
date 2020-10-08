/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ENotisComponent } from './e-notis.component';

describe('ENotisComponent', () => {
  let component: ENotisComponent;
  let fixture: ComponentFixture<ENotisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ENotisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ENotisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
