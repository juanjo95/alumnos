import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../interfaces/alumno';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  nombre:string = '';
  estado:string = 'No Aprobado';

  constructor(private alumnoService:AlumnoService) { }

  ngOnInit(): void {
  }

  agregarAlumno():void{
    const alumno: Alumno = {
      nombre: this.nombre,
      estado: this.estado
    }
    this.alumnoService.agregarAlumnoService(alumno);
    this.nombre = '';
    this.estado = 'No Aprobado';
  }

}
