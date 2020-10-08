/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EFfbComponent } from './e-ffb.component';

describe('EFfbComponent', () => {
  let component: EFfbComponent;
  let fixture: ComponentFixture<EFfbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFfbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
