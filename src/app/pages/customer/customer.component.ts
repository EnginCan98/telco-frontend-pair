import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CorporateCustomer } from 'src/app/model/corporateCustomer';
import { CorporateCustomerService } from 'src/app/services/corporate-customer.service';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { IndividualCustomer } from 'src/app/model/individualCustomer';
import { IndividualCustomerService } from 'src/app/services/individual-customer.service';
import { Location } from '@angular/common'

@Component({
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  // customers !: Customer[];
  individualCustomers !: IndividualCustomer[];
  // corporateCustomers !: CorporateCustomer[];
  customerIdToGo !: number ;
  searchText : string = '';
 

  constructor(private customerService:CustomerService, private individualService: IndividualCustomerService,private corporateService: CorporateCustomerService) { 
  }

  ngOnInit():void {
   
    // this.getAllCustomer();
    this.getIndividualCustomer();
    // getCorporateCustomer();
  }

  // getAllCustomer() {
  //   const response = this.customerService.getCustomer().subscribe((response) => { 
  //     this.customers = response;
  //   }); 
  // }

  getIndividualCustomer() {
    const response = this.individualService.getIndvCustomer().subscribe((response) => { 
      this.individualCustomers = response;
    });
  }
  // getCorporateCustomer() {
  //   const response = this.corporateService.getCorporateCustomer().subscribe((response) => { 
  //   this.corporateCustomers = response;
  //   });
  // }

  changeId(id:number){
    this.customerIdToGo=id;
  }

  onSearchTextChange(){
    console.log(this.searchText)
  }
  
  // update(): void{
  //   const customer : IndividualCustomer={
  //     id: this.customerIdToGo
  //   };
  //   this.individualService.getIndvCustomer(customer).subscribe({
  //     next:(response) => {
  //       console.info(response.id);
  //     },
  //   });
  // }
  
}
