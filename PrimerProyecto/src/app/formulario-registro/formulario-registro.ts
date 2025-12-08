import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulario-registro',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formulario-registro.html',
  styleUrl: './formulario-registro.css'
})
  export class FormularioRegistro implements OnInit, OnDestroy {
    asistenteForm!: FormGroup;
    envioExitoso: boolean = false;
    nombreAsistente: string = '';
    

    tiposInvitado = ['Humano', 'Fantasma', 'Vampiro', 'Bruja'];


    contadorSegundos: number = 0;
    medianocheHalloween = new Date('2025-10-31T00:00:00').getTime(); 
    private timerSubscription!: Subscription;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
      this.iniciarFormulario();
      this.iniciarContador();
    }

    ngOnDestroy(): void {
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
    }

    iniciarFormulario(): void {
      this.asistenteForm = this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        tipoInvitado: ['', Validators.required],
        disfraz: ['', Validators.required],
        fechaLlegada: ['', Validators.required],
        aceptaReglas: [false, Validators.requiredTrue] 
      });
    }


    campoInvalido(campo: string): boolean {
      const control = this.asistenteForm.get(campo);
      return !!(control && control.invalid && (control.touched || control.dirty));
    }


    onSubmit(): void {
      if (this.asistenteForm.valid) {
        this.nombreAsistente = this.asistenteForm.get('nombre')?.value;
        this.envioExitoso = true;
        console.log('Formulario Enviado:', this.asistenteForm.value);
      } else {
        this.asistenteForm.markAllAsTouched();
        this.envioExitoso = false;
      }
    }
    reiniciarRegistro(): void {
    this.envioExitoso = false; 
    this.asistenteForm.reset({
      nombre: '',
      email: '',
      tipoInvitado: '',
      disfraz: '',
      fechaLlegada: '',
      aceptaReglas: false 
    });
    if (this.contadorSegundos === 0) {
      this.iniciarContador();
    }
  }


    iniciarContador(): void {
    const ahora = new Date().getTime();
    let segundosIniciales = Math.floor((this.medianocheHalloween - ahora) / 1000);

    if (segundosIniciales > 0) {
      this.timerSubscription = interval(1000).pipe(
        map(i => segundosIniciales - i - 1) 
      ).subscribe(segundosRestantes => {
        this.contadorSegundos = segundosRestantes;

        if (this.contadorSegundos <= 0) {
          this.timerSubscription.unsubscribe();
          this.contadorSegundos = 0; 
        }
      });
    } else {
      this.contadorSegundos = 0;
    }
  
  }
}
