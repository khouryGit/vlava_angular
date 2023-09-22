import { Component, Inject } from '@angular/core';
//import { ApiService } from './api.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureList: any[] = [];
  teamMembersList: any[] = [];
  faqList: any[] = [];
 //@Inject(ApiService)
  constructor( private apiCaller: HttpClient) {}

  ngOnInit() {
    this.getFeatures();
    this.getTeamMembers();
    this.getFaqs();
  }

  getFaqs() {
    this.apiCaller.get('http://localhost:3000/faq').subscribe((data: any) => {
      this.faqList = data;
    });
  }

  getFeatures() {
    this.apiCaller.get('http://localhost:3000/feature').subscribe((data: any) => {
      this.featureList = data;
    });
  }

  getTeamMembers() {
    this.apiCaller.get('http://localhost:3000/team-members').subscribe((data: any) => {
      this.teamMembersList = data;
    });
  }
}  















/*import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FAQ } from './Models/FAQ';
import { FEATURE } from './Models/FAQ';
import { TEAM_MEMBER } from './Models/FAQ';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myApp';
  faqList: FAQ[]=[];
  featureList: FEATURE[]=[];
  team_membersList: TEAM_MEMBER[]=[];

constructor(public apiCaller: HttpClient){ }

ngOnInit(): void{ 
 this.getFaqs();
 this.getFeatures();
 this.getTeamMembers();
}

//mn3ayet la data mn mahal wahad. mch kel component bt3ayetlo
getFaqs(){
 this.apiCaller.get('http://localhost:3000/faq').subscribe((data:any)=>{
    data.forEach((faq: FAQ) => {
     this.faqList.push(faq);
     });
     
   })
  }
}

getFeatures() {
  this.apiCaller.get('http://localhost:3000/feature').subscribe((data: any) => {
    data.forEach((feature: any) => {
      this.featureList.push(feature);
    });
  });
}

}


getTeamMembers(){
 this.apiCaller.get('http://localhost:3000/team-members').subscribe((data:any)=>{
    data.forEach((tm: TEAM_MEMBER) => {
     this.team_membersList.push(tm);
     });
     
   })
  }
}*/