import { Component, OnInit } from '@angular/core';
import { SearchProduct } from '../../shared/model/searchProduct';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  title: string="search by";
  selectedOption : string;
  searchProduct: SearchProduct=new SearchProduct();
  noOfColumn:any;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
 
  options :any[]=[
    {"field" : "Search BY User"},
    {"field" : "Search BY Product "}
  ];

  productCodes : any[]=[
    {"code" : "P-101"},
    {"code" : "P-102"}
  ]

  modelNumbers: any[]=[
    {"modelNo" : "B25101985"},
    {"modelNo" : "J01051993"},
    {"modelNo" : "S12122017"},
    {"modelNo" : "A01052000"},
    {"modelNo" : "C01054512"},
    {"modelNo" : "Z01055125"},
  ]

  fieldItemSearchByUser:any = [
    {
      "field" :"productCode",
      "placeholder" : "Select Product Code",
      "type" :"dropdown",
      "url" :""
    },
    {
      "field" :"model",
      "placeholder" : "Select Model",
      "type" :"dropdown",
      "url" :""
    },
    {
      "field" :"from",
      "placeholder" : "from",
      "type" :"calender",
      "url" :""
    },
    {
      "field" :"to",
      "placeholder" : "To",
      "type" :"calender",
      "url" :""
    }
  ];

  fieldItemSearchByProduct:any = [
    {
      "field" :"productType",
      "placeholder" : "Select Product Type",
      "type" :"dropdown",
      "url" :""
    },
    {
      "field" :"productNumber",
      "placeholder" : "textbox",
      "type" :"dropdown",
      "url" :""
    }
  ];

  constructor() { }

  ngOnInit() {
    this.selectedOption='Search By product';
    this.noOfColumn={ 'col-xs-3' : true };
  }

}
