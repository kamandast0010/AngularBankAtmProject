import {CustomerModel} from "../customer.model";

export class AddCustomerService{

  Customer : CustomerModel[]=[
    new CustomerModel(1,"sullaiman",1111,10,"sullaiman.com")
  ]
  newCustomer : // @ts-ignore
    CustomerModel={
    customerId:0,
    customerName:"",
    customerAccountNumber:0,
    customerBalance:0,
    customerEmail:""
  }
  addCustomer(){

    // @ts-ignore
    this.Customer.push({customerId:0,customerName:"",customerAccountNumber:0,accountBalance:0,customerEmail:"",...this.newCustomer});
    this.resetForm();
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
}
