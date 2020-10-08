/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EAduanComponent } from './e-aduan.component';

describe('EAduanComponent', () => {
  let component: EAduanComponent;
  let fixture: ComponentFixture<EAduanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EAduanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EAduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
