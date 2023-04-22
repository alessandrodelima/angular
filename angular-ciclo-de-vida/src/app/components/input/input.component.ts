import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ListaDeCompraService} from "../../service/lista-de-compra.service";
import {Item} from "../../interfaces/iItem";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges{
  @Input() itemQueVaiSerEditado! : Item;
  editando = false;
  textoBtn = 'Salvar item'
  valorItem! : string;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem(){
    console.log(this.valorItem);
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo(){
    this.valorItem = '';
  }

  editarItem() {
    this.listaService.editarItemDalista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn =  "Salvar item"
  }

  ngOnChanges(changes: SimpleChanges){
   // console.log(changes['itemQueVaiSerEditado'].currentValue);
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.textoBtn = 'Editar item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }
}
