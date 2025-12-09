import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Mejora {
  nombre: string;
  costo: number;
  gananciaPorSegundo: number; 
  cantidad: number;
}

@Component({
  selector: 'app-clicker',
  imports: [CommonModule],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class Clicker implements OnInit { 
  public numero: number = 0; 
  public cps: number = 0; 


  public mejorasDisponibles: Mejora[] = [
    { nombre: 'Dedo Auxiliar', costo: 15, gananciaPorSegundo: 0.1, cantidad: 0 },
    { nombre: 'Abuela Panadera', costo: 100, gananciaPorSegundo: 1, cantidad: 0 },
    { nombre: 'Fábrica de Galletas', costo: 1100, gananciaPorSegundo: 8, cantidad: 0 }
  ];

  constructor() {}

  ngOnInit(): void {
    this.iniciarGananciaPasiva();
  }
  sumar() {
    this.numero++; 
  }
  comprarMejora(mejora: Mejora) {
    if (this.numero >= mejora.costo) {
      this.numero -= mejora.costo; 
      mejora.cantidad++; 
      mejora.costo = Math.ceil(mejora.costo * 1.15); 
      this.recalcularCps();
    }
  }
  recalcularCps() {
    this.cps = this.mejorasDisponibles.reduce((total, m) => {
      return total + (m.gananciaPorSegundo * m.cantidad);
    }, 0);
  }

  iniciarGananciaPasiva() {
    setInterval(() => {
      this.numero += this.cps / 10;
      this.numero = parseFloat(this.numero.toFixed(1)); 
    }, 100);
  }
}

