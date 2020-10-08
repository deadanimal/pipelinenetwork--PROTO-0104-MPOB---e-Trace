/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TindakanEAmaranComponent } from './tindakan-e-amaran.component';

describe('TindakanEAmaranComponent', () => {
  let component: TindakanEAmaranComponent;
  let fixture: ComponentFixture<TindakanEAmaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TindakanEAmaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TindakanEAmaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
