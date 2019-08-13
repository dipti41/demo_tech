import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: string;  
  customerForm: FormGroup;
  constructor(
    private customerservice: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      id: [''],
      fullname: ['', Validators.required],
      email: ['',Validators.required],
      dob:['',Validators.required],
      password:['',Validators.required], 
      cnpassword:['']  
    },{ validator: this.checkPasswords });
  }
  onSubmit(){
    const formData = new FormData();
    formData.append('name', this.customerForm.get('fullname').value);
    formData.append('email', this.customerForm.get('email').value);
    formData.append('dob', this.customerForm.get('dob').value);
    formData.append('password', this.customerForm.get('password').value);
    
    const id = this.customerForm.get('id').value;
    //console.log(id);
    
      this.customerservice.insertcustomer(formData).subscribe(
        res => {
          if(res.status === 'error'){
          }else{
            this.router.navigate(['/register']);
          }
        },
        error => this.error = error
      );
    }
    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.cnpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

}
