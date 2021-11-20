import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from '../servicios/habitaciones.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  //atributos
  public listaHabitaciones:any[]=[];

  constructor(public servicio:HabitacionesService) { 
    this.servicio.buscarHabitaciones().subscribe(respueta=>{
      console.log(respueta)
      this.listaHabitaciones=respueta.datos
    })
  }

  ngOnInit(): void {
  }

}
