import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface Edificio {
  nombre: string;
  costo: number;
  gananciaPorSegundo: number; 
  cantidad: number;
}

export interface MejoraClick {
  nombre: string;
  costo: number;
  aumentoCPC: number; 
  comprado: boolean;
}

@Component({
  selector: 'app-clicker',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class clicker implements OnInit, OnDestroy { 
 
  public numero: number = 0;      
  public cps: number = 0;         
  public cpc: number = 1;         

  public goldenCookieActive: boolean = false;
  private goldenCookieTimeout: any;
  private goldenCookieInterval: any;
  
  private passiveInterval: any;

  public edificiosDisponibles: Edificio[] = [
    { nombre: 'Dedo Auxiliar', costo: 15, gananciaPorSegundo: 0.1, cantidad: 0 },
    { nombre: 'Abuela Panadera', costo: 100, gananciaPorSegundo: 1, cantidad: 0 },
    { nombre: 'Fábrica de Galletas', costo: 1100, gananciaPorSegundo: 8, cantidad: 0 },
    { nombre: 'Mina Galáctica', costo: 12000, gananciaPorSegundo: 47, cantidad: 0 },
    { nombre: 'Portal Cósmico', costo: 130000, gananciaPorSegundo: 260, cantidad: 0 }
  ];

  public mejorasCPC: MejoraClick[] = [
    { nombre: 'Dedo Biónico', costo: 50, aumentoCPC: 2, comprado: false },
    { nombre: 'Guante de Titanio', costo: 500, aumentoCPC: 5, comprado: false },
    { nombre: 'Microchip Óptico', costo: 10000, aumentoCPC: 20, comprado: false }
  ];

  constructor() {}

  ngOnInit(): void {
    this.iniciarGananciaPasiva();
    this.iniciarGoldenCookieCycle();
  }
  
  ngOnDestroy(): void {
    if (this.passiveInterval) clearInterval(this.passiveInterval);
    if (this.goldenCookieInterval) clearTimeout(this.goldenCookieInterval);
    if (this.goldenCookieTimeout) clearTimeout(this.goldenCookieTimeout);
  }

  sumar() {
    this.numero += this.cpc; 
    this.numero = Math.floor(this.numero); 
  }

  comprarEdificio(edificio: Edificio) {
    if (this.numero >= edificio.costo) {
      this.numero -= edificio.costo; 
      edificio.cantidad++; 
      edificio.costo = Math.ceil(edificio.costo * 1.15); 
      this.recalcularCps();
    }
  }

  comprarMejoraClick(mejora: MejoraClick) {
    if (this.numero >= mejora.costo && !mejora.comprado) {
      this.numero -= mejora.costo;
      this.cpc += mejora.aumentoCPC;
      mejora.comprado = true;
    }
  }

  recalcularCps() {
    this.cps = this.edificiosDisponibles.reduce((total, e) => {
      return total + (e.gananciaPorSegundo * e.cantidad);
    }, 0);
  }

  iniciarGananciaPasiva() {
    this.passiveInterval = setInterval(() => {
      this.numero += this.cps / 10; 
      this.numero = parseFloat(this.numero.toFixed(2));
    }, 100);
  }
  
  iniciarGoldenCookieCycle() {
      const tiempoEspera = Math.random() * (45000 - 15000) + 15000;
      
      this.goldenCookieInterval = setTimeout(() => {
          this.mostrarGoldenCookie();
      }, tiempoEspera);
  }

  mostrarGoldenCookie() {
      this.goldenCookieActive = true;
      this.goldenCookieTimeout = setTimeout(() => {
          this.ocultarGoldenCookie();
      }, 7000);
  }

  ocultarGoldenCookie() {
      this.goldenCookieActive = false;
      clearTimeout(this.goldenCookieTimeout);
      this.iniciarGoldenCookieCycle();
  }

  clickGoldenCookie() {
      if (!this.goldenCookieActive) return;

      const bonificacion = (this.cps * 60) * 15; 
      
      this.numero += bonificacion > 0 ? bonificacion : 500;

      alert(`¡Galleta Dorada! Ganaste ${bonificacion.toFixed(0)} galletas.`);
      
      this.ocultarGoldenCookie();
  }
}