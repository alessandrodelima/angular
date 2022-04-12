import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string = "123"; 
  name2: string = "456";

  client = {
    firstName: "John", 
    lastName: "Mack",
    address: "QSA 10 casa 10",
    age: 30
  };

  constructor() { }

  ngOnInit(): void {
  }

}
