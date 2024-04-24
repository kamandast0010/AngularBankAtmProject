import {Component, Input} from '@angular/core';
import {CustomerModel} from "../customer.model";
import {RouterOutlet} from "@angular/router";
import {NgFor, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule,Validators} from "@angular/forms";
import {AddCustomerService} from "../services/addCustomer.service";

interface onInit {
}

@Component({
  selector: 'app-customer',
  standalone: true,

  imports: [
    RouterOutlet,
    NgFor,
    FormsModule,
    NgIf,
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements onInit{
   // @ts-ignore
  customerForm: FormGroup;
  // @ts-ignore
  errorsMessage = "";
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(){
    this.customerForm = this.fb.group({
      customerId:['',Validators.required],
      customerName:['',Validators.required],
      customerAccountNumber:['',Validators.required],
      customerBalance:['',Validators.required],
      customerEmail:['',Validators.required],
    })
  }
  Customer : CustomerModel[]=[
    // new CustomerModel(1,"sullaiman",1111,10,"sullaiman.com")
  ]
  newCustomer : CustomerModel={
    customerId:0,
    customerName:"",
    customerAccountNumber:0,
    customerBalance:0,
    customerEmail:""
  }

  addCustomer(){
    // @ts-ignore
    if(this.customerForm.valid){
      // const form = this.customerForm.value as CustomerModel;
      this.Customer.push({customerId:0,customerName:"",customerAccountNumber:0,customerBalance:0,customerEmail:""})
    }else{
      this.errorsMessage = "please enter valid info";
    }
  }
  resetForm(){
    this.newCustomer = {
      customerId:0,
      customerName:"",
      customerAccountNumber:0,
      customerBalance:0,
      customerEmail:""
    }
  }
  onDelete(){
    this.Customer.pop()
  }

  log(x:any) {
    console.log(x)
  }
}
