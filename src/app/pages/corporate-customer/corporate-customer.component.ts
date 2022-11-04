import { Component, OnInit } from '@angular/core';

import { CorporateCustomer } from 'src/app/model/corporateCustomer';
import { CorporateCustomerService } from 'src/app/services/corporate-customer.service';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-corporate-customer',
  templateUrl: './corporate-customer.component.html',
  styleUrls: ['./corporate-customer.component.css']
})
export class CorporateCustomerComponent implements OnInit {
  customers !: Customer[];
  corporateCustomers !: CorporateCustomer[];

  constructor(private corporateService: CorporateCustomerService) { }

  ngOnInit(): void {
    // this.getAllCustomer();
    this.getCorporateCustomer();
  }

  // getAllCustomer() {
  //   const response = this.customerService.getCustomer().subscribe((response) => { 
  //     this.customers = response;
  //   }); 
  // }

  getCorporateCustomer() {
    const response = this.corporateService.getCorporateCustomer().subscribe((response) => { 
    this.corporateCustomers = response;
    });
  }
}
