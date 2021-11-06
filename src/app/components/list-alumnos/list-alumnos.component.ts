import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../interfaces/alumno';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  listAlumnos: Array<Alumno> = [];

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {
    this.getListAlumnos();
  }

  getListAlumnos():void{
    this.listAlumnos = this.alumnoService.listAlumnos;
  }

  updateAlumno(id:number, estado:string):void{
    this.alumnoService.updateAlumno(id,estado);
  }

}
