import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent {

  nombreControl = new FormControl(
    '',
    [
      Validators.required,
    ]
  );
  apellidoControl = new FormControl(
    '',
    [
      Validators.required,
    ]
  );

  formularioRegistro = new FormGroup({
    nombre: this.nombreControl,
    email: this.apellidoControl,
  });

  //constructor(private dialogRef: MatDialogRef<FormulariosComponent>){}

guardar(): void{
  
}



}
