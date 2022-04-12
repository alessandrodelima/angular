import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = "My Button";
  i = 0;

  constructor() { }

 
  spinnerMode : ProgressSpinnerMode = 'determinate';
  
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;
  inputName = "john";
  
  ngOnInit(): void {
  }

  salve(){
    console.log("Save, bro.")
  }

  inc(){
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times";
  }

  disabled(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }
  cbChange($event: any){
    console.log("Clicked mano!",$event.checked);
    this.selectDisabled = $event.checked;
  }

  selectionChange($event: any) {
    console.log("Olha o evento: ",$event);
    this.selectedOption = $event.value;
  }
/*
  inputEvent($event: any){
    //console.log("Evento do input", $event);
    console.log("Evento do input "+ $event.target.value);
    console.log("Value do input name "+ this.inputName);
    
  }
  */
}
