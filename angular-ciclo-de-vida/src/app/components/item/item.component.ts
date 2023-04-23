import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Item} from "../../interfaces/iItem";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();
  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit')
  }

  ngOnChanges() {
    console.log('OnChanges')
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }
  deletarItem(){
    console.log('Estão tentando me calar.')
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  ngOnDestroy() {
    console.log("Conseguiram me calar.");
  }

}
