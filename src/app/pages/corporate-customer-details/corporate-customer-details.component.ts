import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CorporateCustomer } from 'src/app/model/corporateCustomer';
import { CorporateCustomerComponent } from '../corporate-customer/corporate-customer.component';
import { CorporateCustomerService } from 'src/app/services/corporate-customer.service';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-corporate-customer-details',
  templateUrl: './corporate-customer-details.component.html',
  styleUrls: ['./corporate-customer-details.component.css']
})
export class CorporateCustomerDetailsComponent implements OnInit {
  corporateCustomers !: CorporateCustomer[];
  customers !: Customer[];

  constructor(private corporateService: CorporateCustomerService,private location:Location, private route:ActivatedRoute,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.corporateCustomers.indexOf = params['id'];
    })
  }

  }


