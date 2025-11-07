import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Cantante } from '../../../models/cantante';
import { MatIcon } from "@angular/material/icon";
import { CommonModule, NgFor } from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';



@Component({
  selector: 'app-tarjeta',
  imports: [MatCardModule, MatButtonModule, MatIcon,CommonModule,NgFor,CdkAccordionModule],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta {
  @Input() artista:Cantante = new Cantante("",0,"","","");
}
