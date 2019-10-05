import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CalendarComponent } from './shared/components/calendar/calendar.component';
import { ProductHeaderComponent } from './product-details/product-header/product-header.component';
import { ProductFilterComponent } from './product-details/product-filter/product-filter.component';
import { ProductWorkareaComponent } from './product-details/product-workarea/product-workarea.component';
import { ProductFooterComponent } from './product-details/product-footer/product-footer.component';
import { MatFormFieldModule,MatSelectModule,MatInputModule,MatDatepickerModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { ProductManagementService } from './shared/service/product-management.service';


@NgModule({
  declarations: [ProductDetailsComponent, CalendarComponent, ProductHeaderComponent, ProductFilterComponent, ProductWorkareaComponent, ProductFooterComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule
  ],
  providers:[ProductManagementService]
})
export class ProductModule { }
