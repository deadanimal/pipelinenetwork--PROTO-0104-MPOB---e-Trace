/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ETindakanComponent } from './e-tindakan.component';

describe('ETindakanComponent', () => {
  let component: ETindakanComponent;
  let fixture: ComponentFixture<ETindakanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ETindakanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ETindakanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
