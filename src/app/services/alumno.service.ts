import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  listAlumnos: Array<Alumno> = [
    {nombre: 'Juan Perez', estado: 'Aprobado'},
    {nombre: 'Nicolas Garcia', estado: 'No Aprobado'},
    {nombre: 'Maria Funes', estado: 'Promocionado'}
  ]

  constructor() { }

  agregarAlumnoService(alumno:Alumno):void{
    this.listAlumnos.unshift(alumno);
  }

  updateAlumno(indice:number, estado:string):void{
    this.listAlumnos[indice].estado = estado;
  }
}
