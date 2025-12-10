import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeChange {

  color = signal<temas>(temas.normal);

  setColor(newColor: temas) {
    this.color.set(newColor);
  }
}
export enum temas{
  navidad = 1,
  halloweenn = 2,
  normal = 3
}
