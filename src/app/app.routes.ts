import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {CustomerComponent} from "./customer/customer.component";

export const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"home",component: HomeComponent},
  {path:"customer",component: CustomerComponent},


];
