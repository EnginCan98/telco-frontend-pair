import { Pipe, PipeTransform } from '@angular/core';

import { Customer } from '../model/customer';
import { IndividualCustomer } from '../model/individualCustomer';
import { IndividualCustomerService } from '../services/individual-customer.service';

@Pipe({
  name: 'filterFirstName'
})
export class FirstNameFilterPipe implements PipeTransform {
  


  transform(value: IndividualCustomer[], firstName: string):IndividualCustomer[] {
    {
      return value.filter((individualCustomer) =>
      individualCustomer.firstName.toLocaleLowerCase().includes(firstName.toLocaleLowerCase())
      // filterText = filterText?filterText.toLocaleLowerCase():""
      // return filterText?value
      // .filter((p:IndividualCustomer)=>p.firstName.toLocaleLowerCase().indexOf(filterText)!==-1)
      // :value;
  )}
  }
}
