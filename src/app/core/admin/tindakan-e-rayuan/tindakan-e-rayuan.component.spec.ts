/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TindakanERayuanComponent } from './tindakan-e-rayuan.component';

describe('TindakanERayuanComponent', () => {
  let component: TindakanERayuanComponent;
  let fixture: ComponentFixture<TindakanERayuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TindakanERayuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TindakanERayuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
