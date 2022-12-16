import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit{
 logForm!:FormGroup
 constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router) { }
 ngOnInit(): void {
  this.logForm = this.formbuilder.group({
   email:[''],
    password:['']
  })
}

log(){
  //console.log(this.logForm.value);
  this._http.get<any>('http://localhost:3000/signup').subscribe(res=>{
    const user= res.find((a:any)=>{
        return a.email === this.logForm.value.email && a.password === this.logForm.value.password;
      })
       if (user) {
        alert( 'logged in successfully');
        this._router.navigate(['/dash']);
        this.logForm.reset();
       } else {
        alert("Invalid credentials");
       }
      }, err=>{
        alert("somethig wrog")
        
      })
    }
  
}


