import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from 'src/app/pages/tablas/tablas.component'
@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Estudiante, ...args: unknown[]): unknown {
    console.log(args)
    const newValue = `${value.nombre} ${value.apellido}`
    const isMayus = args[0] === 'mayuscula';

    switch (args[0]){
      case 'mayuscula':
        return newValue.toUpperCase();
      case 'minuscula':
        return newValue.toLowerCase();

      default:
        return newValue;
    }

    return isMayus ? newValue.toUpperCase() : newValue.toLocaleLowerCase();
  }

}
