import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
message = " ";
address =" ";
no = " ";
@Output()msgChanged =new EventEmitter<any>();
// message = " ";
student = {name:'', address: '', no :''};
studentArray:any = []

sendData(){
  // alert(this.message);
  // this.msgChanged.emit(this.message);
  // this.msgChanged.emit(this.address);
  // this.msgChanged.emit(this.no);
  this.student = {name:this.message, address: this.address, no :this.no}
this.studentArray.push(this.student)
this.student = {name:'', address: '', no :''};
console.log(this.studentArray);


this.msgChanged.emit(this.studentArray)
}
 }
