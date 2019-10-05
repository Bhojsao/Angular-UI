import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ProductManagementService } from '../../shared/service/product-management.service';


export interface PeriodicElement {
  No: string,
  productCode: string,
  modelNumber: string,
  productType: string,
  productNumber: string
}
let ELEMENT_DATA:PeriodicElement[] = [
  {
    "No"            : "1",
    "productCode"   : "P-101",
    "modelNumber"   : "B25101985",
    "productType"   : "Computer",
    "productNumber" : "CP123"
  },
  {
    "No"            : "2",
    "productCode"   : "P-101",
    "modelNumber"   : "J01051993",
    "productType"   : "RAM",
    "productNumber" : "R1234"
  },
  {
    "No"            : "3",
    "productCode"   : "P-101",
    "modelNumber"   : "S12122017",
    "productType"   : "MemoryCard",
    "productNumber" : "MC123"
  },
  {
    "No"            : "4",
    "productCode"   : "P-102",
    "modelNumber"   : "A01052000",
    "productType"   : "Disk",
    "productNumber" : "D1234"
  },
  {
    "No"            : "5",
    "productCode"   : "P-102",
    "modelNumber"   : "C01054512",
    "productType"   : "Monitor",
    "productNumber" : "MR123"
  },
  {
    "No"            : "6",
    "productCode"   : "P-102",
    "modelNumber"   : "Z01055125",
    "productType"   : "Mouse",
    "productNumber" : "M1234"
  }
];
@Component({
  selector: 'app-product-workarea',
  templateUrl: './product-workarea.component.html',
  styleUrls: ['./product-workarea.component.css']
})
export class ProductWorkareaComponent implements OnInit {
  displayedColumns: string[] = ['No','productCode', 'modelNumber', 'productType', 'productNumber'];
  dataSource = ELEMENT_DATA;
  productManagementService : ProductManagementService;

  constructor( productManagementService : ProductManagementService) { 
  this.productManagementService=productManagementService;
  }

  ngOnInit() {
    this.productManagementService.authenticate().subscribe(data =>{

      console.log(data);
    });
  }


}
