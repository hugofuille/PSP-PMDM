import { Routes } from '@angular/router';
import { Contador } from './componets/contador/contador';
import { Matatopos } from './componets/matatopos/matatopos';
import { Pages } from './componets/pages/pages';
import { lista } from './componets/lista-personaje/lista/lista';
import { Noria } from './componets/noria/noria';
import { Carrera } from './componets/carrera/carrera';
import { FormularioRegistro } from './formulario-registro/formulario-registro';
import { KanbanBoard } from './componets/kanban-board/kanban-board';
import { clicker } from './componets/clicker/clicker';




export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'matatopos', component: Matatopos},
    { path: 'carrera', component: Carrera},  
    { path: 'formulario-registro', component: FormularioRegistro},  
    { path: '', component: Pages},     
    { path: 'lista', component: lista},
    { path: 'noria', component: Noria},
    { path: 'kanban-board', component: KanbanBoard},
    { path: 'clicker', component: clicker},


];
