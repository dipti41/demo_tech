import { Component, OnInit,ViewChild } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  MyDataSource: any;  
  displayedColumns = ['sl_no','name','email','dob','action'];
  error: string;

  constructor(private customerservice: CustomerService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  applyFilter(filterValue: string) {
    this.MyDataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.RenderDataTable();
  }
  
  RenderDataTable() {  
    this.customerservice.getcustomer()  
      .subscribe(  
      res => {  
        this.MyDataSource = new MatTableDataSource();  
        this.MyDataSource.data = res;
        this.MyDataSource.sort = this.sort;
        this.MyDataSource.paginator = this.paginator;  
        //console.log(this.MyDataSource.data);  
      },  
      error => {  
        console.log('There was an error while retrieving Posts !!!' + error);  
      });  
  }
  onDelete(id:number){
    if (confirm('Are you sure want to delete id = ' + id)) {
this.customerservice.delete_customer(+id).subscribe(
  res => {
    this.ngOnInit();
  },
  error => this.error = error
);
    }
  }
  
  
  exportCsv(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Customer List',
      useBom: true,
      noDownload: false,
      headers: ['sl_no','fullname','email','dob']
    };
    
new Angular5Csv(this.MyDataSource.data,'Customer Report',options);
}

}
