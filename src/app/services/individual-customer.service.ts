import { HttpClient } from '@angular/common/http';
import { IndividualCustomer } from '../model/individualCustomer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerService {

  private controllerUrl = `${environment.apiUrl}/individualCustomers`;

  constructor(private httpClient:HttpClient) {
  }

  getIndvCustomer(): Observable<IndividualCustomer[]> {
    return this.httpClient.get<IndividualCustomer[]>(this.controllerUrl);
  }
  
  goToIndıv(id:number): Observable<IndividualCustomer> {
    const url = `${this.controllerUrl}/${id}`;
    // return this.httpClient.get(url);
    return this.httpClient.get<IndividualCustomer>(url);
  }

}
