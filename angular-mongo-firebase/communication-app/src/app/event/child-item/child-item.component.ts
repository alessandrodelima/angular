import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title: string | undefined;
  @Output() plusOne: EventEmitter<any> = new EventEmitter();
  @Output() plusTwo = new EventEmitter<any>();
  @Output() minusOne = new EventEmitter<any>();
  @Output() minusTwo = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  plusOneClick() {
    this.plusOne.emit();
  }

  plusTwoClick() {
    this.plusTwo.emit();
    
  }

  ninusOneClick() {
    this.minusOne.emit();
  }

  ninusTwoClick() {
    this.minusTwo.emit();
  }

}
