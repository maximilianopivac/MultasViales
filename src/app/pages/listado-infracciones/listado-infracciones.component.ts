import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfraccionesService } from '../../services/infracciones.service';

@Component({
  selector: 'app-listado-infracciones',
  templateUrl: './listado-infracciones.component.html',
  styleUrls: ['./listado-infracciones.component.css']
})
export class ListadoInfraccionesComponent implements OnInit {

  public infraccionSearch: string;
  itemList: DetalleInfraccionesInterface[];

  constructor(public infServ: InfraccionesService) { }

  ngOnInit() {

    this.infServ.findInfractions().subscribe(res => {
      this.itemList = res.items;
    });

  }

  buscarInfracciones(infraccionSearch): any {
    // let resultado: any;

    if (infraccionSearch === '') {
      return this.ngOnInit();
    } else {
      return this.infServ.buscarInfraccion(infraccionSearch).subscribe(infraccionList => {
        this.itemList = infraccionList.items;
      });
    }
  }

}

export interface DetalleInfraccionesInterface {
  ifrid: number;
  ifrcodigo: string;
  ifrds: string;
  ifrcosto: number;
}

export interface RespInterface {
  next: string;
  items: DetalleInfraccionesInterface[];
}

