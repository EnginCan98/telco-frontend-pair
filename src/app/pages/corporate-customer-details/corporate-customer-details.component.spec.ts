import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateCustomerDetailsComponent } from './corporate-customer-details.component';

describe('CorporateCustomerDetailsComponent', () => {
  let component: CorporateCustomerDetailsComponent;
  let fixture: ComponentFixture<CorporateCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateCustomerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
