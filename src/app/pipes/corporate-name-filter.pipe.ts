import { Pipe, PipeTransform } from '@angular/core';

import { CorporateCustomer } from '../model/corporateCustomer';
import { Customer } from '../model/customer';

@Pipe({
  name: 'filterCorporateName'
})
export class CorporateNameFilterPipe implements PipeTransform {
  

  transform(value: CorporateCustomer[], filterText: string):CorporateCustomer[] {
    {
      filterText = filterText?filterText.toLocaleLowerCase():""
      return filterText?value
      .filter((p:CorporateCustomer)=>p.companyName.toLocaleLowerCase().indexOf(filterText)!==-1)
      :value;
  }
  }
}
