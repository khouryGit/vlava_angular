import { Component } from '@angular/core';
import { Message } from '../Models/FAQ';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
msg : Message = new Message();

constructor(public apiCaller: HttpClient){}

ContactUs(){
  const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
  this.apiCaller.post<any>('http://localhost:3000/contactus', JSON.stringify(this.msg), httpOptions).subscribe(data => {
      console.log('mabrook')
    })
  }
}
