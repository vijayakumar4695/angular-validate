import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 data1:any;
  constructor(public dataservice:DataserviceService,public routing:Router) { }

  ngOnInit() {
  
  }
  add(value){
    this.dataservice.regData(value).subscribe(res=>{
      this.data1=res;
      this.routing.navigate(['/login']);
      console.log(res)
    })
  }

}
