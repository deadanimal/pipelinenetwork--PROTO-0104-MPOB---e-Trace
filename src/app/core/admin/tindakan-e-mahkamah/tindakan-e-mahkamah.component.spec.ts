/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TindakanEMahkamahComponent } from './tindakan-e-mahkamah.component';

describe('TindakanEMahkamahComponent', () => {
  let component: TindakanEMahkamahComponent;
  let fixture: ComponentFixture<TindakanEMahkamahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TindakanEMahkamahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TindakanEMahkamahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
