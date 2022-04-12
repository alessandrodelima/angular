import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Hermenegildo",
    "Felizberto",
    "Astrodilgo",
    "Herminia",
    "Isabella",
    "Daniella",
    "Fernando",
    "Thiago",
    "Laís",
    "Gabriella",
    "Raquel"
  ];

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



  constructor() { }

  ngOnInit(): void {
  }

}
