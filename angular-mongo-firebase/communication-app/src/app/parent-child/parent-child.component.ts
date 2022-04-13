import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  //@ViewChild("stopwatch2")
  @ViewChild(TimerComponent)
  private mytimer : TimerComponent | undefined

  @ViewChild("myP")
  private myp: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.mytimer?.start();
  }

  stop() {
    this.mytimer?.stop();
  }

  clear() {
    this.mytimer?.clear();
  }

  ngAfterViewInit() {
    console.log(this.myp);
    
  }
}
