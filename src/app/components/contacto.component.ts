import { Component, inject } from '@angular/core';
import { FormControl, Validators, ValidatorFn, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule]
})
export default class ContactoComponent {
  nombre: FormControl = new FormControl('', Validators.required);
  apellido: FormControl = new FormControl();
  email: FormControl = new FormControl('', [Validators.required, Validators.email, this.validateEmailExtension()]);
  asunto: FormControl = new FormControl('', Validators.required);
  mensaje: FormControl = new FormControl('', Validators.required)
  private router = inject(Router);
  private backend = inject(NewsService);

  validateEmailExtension(): ValidatorFn {
    return (control: any) => {
      const email = control.value;
      const extensionRegex = /\.([a-zA-Z]{2,})$/;
      if (email && !extensionRegex.test(email)) {
        return { invalidExtension: true };
      }
      return null;
    };
  }

  contact(): void {
    let contact: any = {
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      email: this.email.value,
      asunto: this.asunto.value,
      mensaje: this.mensaje.value
    };
    console.log(contact);
    this.backend.contact(contact).pipe(
      tap((data) => {
        Swal.fire({
          icon: 'success',
          title: "Mensaje Enviado",
          text: "Gracias por su mensaje. Lo revisaremos y le responderemos a la brevedad.",
          timer: 5000,
        });
        this.nombre.reset();
        this.apellido.reset();
        this.email.reset();
        this.asunto.reset();
        this.mensaje.reset();

      }),
      catchError((error) => {
        Swal.fire({
          title: "No fue posible enviar su mensaje.",
          text: "Por favor reintente.",
          icon: "error",
          timer: 5000,
        });
        this.router.navigate(['contact']);
        throw error;
      })
    ).subscribe();
  }
}
