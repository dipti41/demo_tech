import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface Customer {
  id: number;
  name: string;
  email: string;  
  password:any;  
  dob:any;  
}
interface District {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  serverUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getcustomer() {
    return this.http.get<Customer>(this.serverUrl + 'adminapi/getcustomer').pipe(catchError(this.handleError));
  }
  getcustomerbyid(id: number) {
    return this.http.get<Customer>(this.serverUrl + 'adminapi/getcustomer_by_id/' + id).pipe(catchError(this.handleError));
  }
  
  update_customer(customer, id: number) {
    return this.http.post<any>(this.serverUrl + 'adminapi/update_customer_by_id/' + id, customer).pipe(catchError(this.handleError));
  }
  insertcustomer(customer){
return this.http.post<any>(this.serverUrl + 'adminapi/insert_customer_data',customer).pipe(catchError(this.handleError));
  }
  delete_customer(id: number){
return this.http.delete(this.serverUrl + 'adminapi/delete_customer/' + id).pipe(catchError(this.handleError));
  }
  gettotalorder() {
    return this.http.get<any>(this.serverUrl + 'adminapi/get_total_order/').pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${JSON.stringify(error.error)}`);
    }

    // return an observable with a user-facing error message

    return throwError('Something bad happened. Please try again later.');
  }
}
