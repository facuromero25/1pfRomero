import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosComponent } from './formularios.component';

import { ReactiveFormsModule } from '@angular/forms';

// PARA TRABAJAR CON LOS FORMS DE MATERIALS NECESITAN ESTOS DOS MODULOS:
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    FormulariosComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    PipesModule,
    DirectivesModule,
    ReactiveFormsModule,
    MatDialogModule
    
   

  ],
  exports: [
    FormulariosComponent
  ]
})
export class FormulariosModule { }
