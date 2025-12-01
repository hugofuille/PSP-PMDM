import { Routes } from '@angular/router';
import { Carrera } from './componets/carrera/carrera';
import { Contador } from './componets/contador/contador';
import { Matatopos } from './componets/matatopos/matatopos';
import { FormularioRegistro } from './formulario-registro/formulario-registro';
import { Pages } from './componets/pages/pages';
import { lista } from './componets/lista-personaje/lista/lista';
import { Noria } from './componets/noria/noria';



export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'matatopos', component: Matatopos},
    { path: 'carrera', component: Carrera},  
    { path: 'formulario-registro', component: FormularioRegistro},  
    { path: '', component: Pages},     
    { path: 'lista', component: lista},
    { path: 'noria', component: Noria},

];
