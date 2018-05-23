import { Component, OnInit, Input } from '@angular/core';
import { InfraccionesService } from '../../services/infracciones.service';

@Component({
  selector: 'app-listado-infracciones',
  templateUrl: './listado-infracciones.component.html',
  styleUrls: ['./listado-infracciones.component.css']
})
export class ListadoInfraccionesComponent implements OnInit {

  @Input()
  searchInput: string;

  constructor(public infServ: InfraccionesService) { }

  ngOnInit() {
    this.infServ.findInfractions();
  }



}
