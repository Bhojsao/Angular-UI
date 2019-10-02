import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ProductDetailsComponent } from './product-management/product-details/product-details.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ProductModule } from './product-management/product.module';

export function getDefaultRoute(mode :any) : string{
  return mode ? '/home':'/login';
}
const appRoutes: Routes = [
  { path: ' ', redirectTo: getDefaultRoute(true), pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductDetailsComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    TestComponent],
  imports: [
    RouterModule.forRoot(appRoutes,{onSameUrlNavigation:'reload'}),
    CommonModule,
    ProductModule
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
