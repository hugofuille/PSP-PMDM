import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  mostrarDescripcion: boolean; 
}

@Component({
  selector: 'app-kanban-board',
  imports: [DragDropModule, FormsModule, CommonModule],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.css'
})
export class KanbanBoard implements OnInit {

  todo: Tarea[] = [
    { id: 1, titulo: 'Configurar Proyecto Angular', descripcion: 'Instalar CLI y crear el proyecto base.', mostrarDescripcion: false },
    { id: 2, titulo: 'Diseñar Interfaz Tarea', descripcion: 'Definir el estilo visual de las tarjetas.', mostrarDescripcion: false }
  ];

  doing: Tarea[] = [
    { id: 3, titulo: 'Implementar DragDrop', descripcion: 'Usar Angular CDK para mover entre columnas.', mostrarDescripcion: false }
  ];

  done: Tarea[] = [
    { id: 4, titulo: 'Crear Interfaz Tarea', descripcion: 'Definir la interfaz Tarea en TypeScript.', mostrarDescripcion: false }
  ];

  nuevaTarea: Tarea = { id: 0, titulo: '', descripcion: '', mostrarDescripcion: false };
  nextId: number = 5; 

  constructor() { }

  ngOnInit(): void {
    const allTasks = [...this.todo, ...this.doing, ...this.done];
    if (allTasks.length > 0) {
      this.nextId = Math.max(...allTasks.map(t => t.id)) + 1;
    }
  }

  drop(event: CdkDragDrop<Tarea[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  addTask() {
    if (this.nuevaTarea.titulo.trim()) {
      const taskToAdd: Tarea = {
        id: this.nextId++,
        titulo: this.nuevaTarea.titulo.trim(),
        descripcion: this.nuevaTarea.descripcion.trim() || 'Sin descripción',
        mostrarDescripcion: false
      };
      this.todo.push(taskToAdd);
      this.nuevaTarea = { id: 0, titulo: '', descripcion: '', mostrarDescripcion: false };
    }
  }
  deleteTask(task: Tarea, list: Tarea[]) {
    const index = list.indexOf(task);
    if (index >= 0) {
      list.splice(index, 1);
    }
  }
  toggleDescription(task: Tarea) {
    task.mostrarDescripcion = !task.mostrarDescripcion;
  }
}


