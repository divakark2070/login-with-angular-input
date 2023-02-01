import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'input_login';
  // message="";
  // address="";
  // no="";
  studentArray:any = [];

  dataRecieved(msg:any){
    this.studentArray = msg;
    
  }
 
}
