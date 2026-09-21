import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefas } from '../../services/tarefas';

@Component({
  selector: 'app-item-tarefa',
  imports: [CommonModule, FormsModule],
  templateUrl: './item-tarefa.html',
  styleUrl: './item-tarefa.css'
})
export class ItemTarefa {

  novaTarefa = '';
  modoEscuro = false;

  constructor(public tarefaService: Tarefas) {}

  adicionarTarefa() {
    this.tarefaService.adicionar(this.novaTarefa);
    this.novaTarefa = '';
  }

  removerTarefa(indice: number) {
    this.tarefaService.remover(indice);
  }
}