import { Routes } from '@angular/router';
import { PasoParametros } from './paso-parametros/paso-parametros';
import { Carrera } from './componets/carrera/carrera';
import { Contador } from './componets/contador/contador';
import { Matatopos } from './componets/matatopos/matatopos';
import { FormularioRegistro } from './formulario-registro/formulario-registro';


export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'matatopos', component: Matatopos},
    { path: 'carrera', component: Carrera}, 
    { path: 'paso-parametros/:num', component: PasoParametros},   
    { path: 'formulario-registro', component: FormularioRegistro},           
];
