import { Component, OnInit, Input } from '@angular/core';
import { InfraccionesService } from '../../services/infracciones.service';

@Component({
  selector: 'app-listado-infracciones',
  templateUrl: './listado-infracciones.component.html',
  styleUrls: ['./listado-infracciones.component.css']
})
export class ListadoInfraccionesComponent implements OnInit {

  public infraccionSearch: string;

  constructor(public infServ: InfraccionesService) { }

  ngOnInit() {
    this.infServ.findInfractions();
  }

  buscarInfraccion(infraccionSearch) {
    if (infraccionSearch === '') {
      this.ngOnInit();
    } else {
      this.infServ.buscarInfraccion(infraccionSearch);
    }
  }
}
