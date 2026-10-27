import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

interface RegistrationData {
  nombre: string;
  apellidos: string;
  nif: string;
  email: string;
  telefono: string;
  sexo: string;
  origen: string;
  contrasena: string;
  confirmarContrasena: string;
  aceptaTerminos: boolean;
}

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  datos: RegistrationData = {
    nombre: '',
    apellidos: '',
    nif: '',
    email: '',
    telefono: '',
    sexo: '',
    origen: '',
    contrasena: '',
    confirmarContrasena: '',
    aceptaTerminos: false,
  };

  enviado = false;

  registrar(formulario: NgForm): void {
    this.enviado = true;

    if (formulario.invalid || this.datos.contrasena !== this.datos.confirmarContrasena) {
      return;
    }

    console.log('Datos del registro:', { ...this.datos });
  }
}
