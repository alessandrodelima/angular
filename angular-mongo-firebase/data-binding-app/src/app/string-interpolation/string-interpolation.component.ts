import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

    firstname = "John Connor";

    person = {
      firstname: "Astrogildo",
      lastname: "Sauro",
      age: 50,
      address: "Router 100"
    }


  constructor() { }

  ngOnInit(): void {
  }

}
