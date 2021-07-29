import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-mycomponenets',
  templateUrl: './mycomponenets.component.html',
  styleUrls: ['./mycomponenets.component.css']
})
export class MycomponenetsComponent implements OnInit {

  formValue !:FormGroup
  constructor() { } 

  ngOnInit(): void 
  {
   
   ({
  name :[''],
  sku :[''] ,
  
description:[''],
price :[''],
stock:['']
   })
  }



}
