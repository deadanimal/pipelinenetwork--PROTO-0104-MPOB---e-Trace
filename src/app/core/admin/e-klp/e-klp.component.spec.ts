/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EKlpComponent } from './e-klp.component';

describe('EKlpComponent', () => {
  let component: EKlpComponent;
  let fixture: ComponentFixture<EKlpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EKlpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EKlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
