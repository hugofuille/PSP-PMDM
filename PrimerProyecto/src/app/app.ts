import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './componets/contador/contador';
import { Matatopos } from './componets/matatopos/matatopos';
import { NavBar } from './componets/nav-bar/nav-bar';
import { Carrera } from './componets/carrera/carrera';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador, Matatopos, NavBar, Carrera],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Introduccion');
}
