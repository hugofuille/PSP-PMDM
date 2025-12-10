import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { temas, ThemeChange } from '../../services/theme-change';




@Component({
  selector: 'app-nav-bar',
  imports: [FormsModule,CommonModule, RouterLink, MatToolbarModule, MatIconModule, MatMenuModule, MatSlideToggleModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar  {

  temasa = Object.values(temas);

  constructor(public colorservicec : ThemeChange){

  }

  esHalloween = false;
  esNavidad = false;
  esNormal = true;


  setTheme() {

    let theme = this.colorservicec.color();

    if (theme === temas.halloweenn) {
      this.esHalloween = true;
      this.esNavidad = false;
      this.esNormal = false;
      document.body.style.backgroundImage = "url('/halloween.webp')";
    } else if (theme === temas.navidad) {
      this.esNavidad = true;
      this.esHalloween = false;
      this.esNormal = false;
      document.body.style.backgroundImage = "url('/navidad.png')";
    } else if (theme === temas.normal){
      this.esHalloween = false;
      this.esNavidad = false;
      this.esNormal = true;
      document.body.style.backgroundImage = "";
    }

  }
  actualizarTema(tema : temas){
    this.colorservicec.setColor(tema);
    this.setTheme();
  }

  ponerNormal(){
    this.actualizarTema(temas.normal);
  }
  ponerHalloween(){
    this.actualizarTema(temas.halloweenn);
  }
  ponerNavidad(){
    this.actualizarTema(temas.navidad);
  }


 

}