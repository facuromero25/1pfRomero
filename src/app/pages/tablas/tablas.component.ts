import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  fecha_registro: Date;

}

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.scss']
})
export class TablasComponent {

  estudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: 'facu',
      apellido: 'romero',
      fecha_registro: new Date()

    },
    {
      id: 2,
      nombre: 'cami',
      apellido: 'lopez',
      fecha_registro: new Date()
    },
    {
      id: 3,
      nombre: 'marco',
      apellido: 'moreschi',
      fecha_registro: new Date()
    }
  ]

  dataSource = new MatTableDataSource(this.estudiantes);

  displayedColumns: string[] = ['id','nombreCompleto','fecha_registro','modificar','eliminar'];

  aplicarFiltro(ev: Event): void {
    console.log(ev);
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLocaleLowerCase();
  }


   constructor(private matDialog: MatDialog){}

   abrirAbmAlumnos(): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent)
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            fecha_registro: new Date(),
            id: this.dataSource.data.length + 1,
          }
        ];
      }
    })
  }

  eliminarEstudiante(estudiante: Estudiante) {
    this.estudiantes = this.estudiantes.filter(e => e.id !== estudiante.id);
    this.dataSource = new MatTableDataSource(this.estudiantes);
  }


  abrirEdicionEstudiante(estudiante: Estudiante): void {
    const dialog = this.matDialog.open(AbmAlumnosComponent, {
      data: {
        estudiante: estudiante,
        esEdicion: true
      }
    });
    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        const index = this.estudiantes.findIndex(e => e.id === estudiante.id);
        this.estudiantes[index] = {
          ...valor,
          fecha_registro: new Date(),
          id: estudiante.id,
        };
        this.dataSource.data = this.estudiantes;
      }
    });
  }



  
}
