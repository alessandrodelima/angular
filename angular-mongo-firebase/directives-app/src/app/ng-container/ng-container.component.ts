import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {
  
  users = [
    { login: "Bob",  role: "admin", lastlogin: new Date('02/01/2018')},
    { login: "Lia",  role: "user", lastlogin: new Date('04/30/2018')},
    { login: "John", role: "admin", lastlogin: new Date('04/23/2018')},
    { login: "Bob",  role: "user", lastlogin: new Date('02/20/2018')},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
