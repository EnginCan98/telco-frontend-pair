import { Pipe, PipeTransform } from '@angular/core';

import { Customer } from '../model/customer';
import { IndividualCustomer } from '../model/individualCustomer';

@Pipe({
  name: 'filterLastName'
})
export class LastNameFilterPipe implements PipeTransform {
  

  transform(value: IndividualCustomer[], filterText: string):IndividualCustomer[] {
    {
      filterText = filterText?filterText.toLocaleLowerCase():""
      return filterText?value
      .filter((p:IndividualCustomer)=>p.lastName.toLocaleLowerCase().indexOf(filterText)!==-1)
      :value;
  }
  }
}