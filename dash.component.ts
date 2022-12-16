import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../sheard/api.service';
import { trekData } from './trek.modal';
import { ReactiveFormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  formvalue!: FormGroup
trekModelObj :trekData=new trekData;
  constructor(private formBuilder: FormBuilder, private api:ApiService)
    { }

  ngOnInit(): void {
    this.formvalue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services:[''],
    })
  }
  addtrek(): void{
    this.trekModelObj.name = this.formvalue.value.name;
    this.trekModelObj.email = this.formvalue.value.email;
    this.trekModelObj.mobile = this.formvalue.value.mobile;
    this.trekModelObj.address = this.formvalue.value.address;
    this.trekModelObj.services = this.formvalue.value.services;

    this.api.posttrek(this.trekModelObj).subscribe(res => {
      console.log(res);
      alert("Trekker Records Added Successfully");
      this.formvalue.reset();
    },
     err=>{
      console.log(err);
      alert("Trekker Records  Failed to add!");
    })
  }
}
