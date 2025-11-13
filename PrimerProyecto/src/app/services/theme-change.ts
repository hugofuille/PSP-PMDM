import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeChange {
   private theme = 'normal';

  setTheme(theme: string) {
    this.theme = theme;
  }

  getTheme() {
    return this.theme;
  }
}

