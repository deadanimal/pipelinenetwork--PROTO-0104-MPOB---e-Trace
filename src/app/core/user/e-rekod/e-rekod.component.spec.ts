/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ERekodComponent } from './e-rekod.component';

describe('ERekodComponent', () => {
  let component: ERekodComponent;
  let fixture: ComponentFixture<ERekodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERekodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERekodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
