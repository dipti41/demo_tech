import { Component, OnInit } from '@angular/core';

import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalcustomer: number = 0;
  
  constructor(private categoryservice: CustomerService) { }

  ngOnInit() {
    this.categoryservice.gettotalorder().subscribe(
      res => {
        //console.log(res);
        this.totalcustomer = res.totalcustomer;
                       
      }
    );
  }

}
