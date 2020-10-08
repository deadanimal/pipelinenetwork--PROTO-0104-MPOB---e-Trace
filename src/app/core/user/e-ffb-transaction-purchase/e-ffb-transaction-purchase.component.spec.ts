/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EFfbTransactionPurchaseComponent } from './e-ffb-transaction-purchase.component';

describe('EFfbTransactionPurchaseComponent', () => {
  let component: EFfbTransactionPurchaseComponent;
  let fixture: ComponentFixture<EFfbTransactionPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFfbTransactionPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFfbTransactionPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
