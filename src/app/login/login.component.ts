import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bind:any;
  result:any;
  constructor(public dataservice:DataserviceService,public routing:Router) { }

  ngOnInit() {
  
      this.dataservice.getData().subscribe(res=>{
        this.bind=res;
        console.log(res)
      })
  }
  

  
add(value){
   for(let i=0;i<this.bind.length;i++){
     if(value.email===this.bind[i].email){
       if(value.pswd===this.bind[i].pswd){
         this.routing.navigate(['/dataservice']);
       }
       else{
         alert('password wrong')
       }
     }
   }
 
}
}
