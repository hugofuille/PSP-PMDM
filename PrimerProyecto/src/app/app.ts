import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './componets/contador/contador';
import { Matatopos } from './componets/matatopos/matatopos';
import { NavBar } from './componets/nav-bar/nav-bar';
import { Carrera } from './componets/carrera/carrera';
import { Pages } from './componets/pages/pages';
import { Clicker } from './componets/clicker/clicker';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pages, Contador, Matatopos, NavBar, Carrera,Clicker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Introduccion');
}
