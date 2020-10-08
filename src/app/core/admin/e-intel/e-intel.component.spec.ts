/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EIntelComponent } from './e-intel.component';

describe('EIntelComponent', () => {
  let component: EIntelComponent;
  let fixture: ComponentFixture<EIntelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EIntelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
