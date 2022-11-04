import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CorporateCustomer } from 'src/app/model/corporateCustomer';
import { CorporateCustomerService } from 'src/app/services/corporate-customer.service';
import { Customer } from 'src/app/model/customer';
import { CustomerComponent } from '../customer/customer.component';
import { CustomerService } from 'src/app/services/customer.service';
import { IndividualCustomer } from 'src/app/model/individualCustomer';
import { IndividualCustomerService } from 'src/app/services/individual-customer.service';
import { Location } from '@angular/common'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customers !: Customer[];
  individualCustomers !: IndividualCustomer[];
 

  constructor(private route:ActivatedRoute, private location:Location,private customerService:CustomerService, private individualService: IndividualCustomerService) {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('customerId')
    console.log(id)
    console.log(typeof(id))
    this.individualService.goToIndıv(Number(id)).subscribe(c => this.individualCustomers);

    // const id: Observable<number> = this.route.params.pipe(map(p => p['id']));
    // console.log(id)


    // this.route.queryParams.subscribe(params => {
    //   this.individualCustomers.indexOf = params['id'];
    //   console.log(this.individualCustomers.indexOf = params['id'])
    // })
  }
  
}
