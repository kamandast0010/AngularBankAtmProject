export class CustomerModel{
  public customerId: number;
  public customerName: string;
  public customerAccountNumber: number;
  public customerBalance: number;
  public customerEmail: string;


  constructor(customerId: number, customerName: string, customerAccountNumber: number, customerBalance: number, customerEmail: string) {
    this.customerId = customerId;
    this.customerName = customerName;
    this.customerAccountNumber = customerAccountNumber;
    this.customerBalance = customerBalance;
    this.customerEmail = customerEmail;
  }
}
