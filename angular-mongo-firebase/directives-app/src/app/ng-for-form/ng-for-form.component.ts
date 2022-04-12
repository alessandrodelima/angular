import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number =  0;

  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Brasília", state: "DF"},
    {name: "Curitiba", state: "PR"},
    {name: "Rio de Janeiro", state: "RJ"},
    {name: "Porto Alegre", state: "RS"},
    {name: "Goiânia", state: "GO"},
    {name: "Bahia", state: "BA"},
    {name: "Amazonas", state: "AM"},
    {name: "Ceará", state: "CE"}
  ];
  
  //clients = [{}]; // angular 11 tive que colocar o {} abaixo foi melhorado
  clients: Array<any> = [];


  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        city: this.city,
        age: this.age,
        phone: this.phone

      }
    );
    this.cancel;
      console.log(this.clients);
      
  }

  cancel() {
    this.name = "";
    this.address = "";
    this.city = "";
    this.age = 0;
    this.phone = "";

  }

  delete(i: number){
    //console.log("Delete bro." + i);
    this.clients.splice(i, 1);
    
  }
}
