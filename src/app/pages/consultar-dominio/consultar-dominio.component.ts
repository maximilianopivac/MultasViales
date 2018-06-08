import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../services/vehiculos.service';

@Component ({
    selector: 'app-consultar-dominio',
    templateUrl: './consultar-dominio.component.html'
})

export class ConsultarDominioComponent {

    public documento: string;
    searchResult: DetalleVehiculoInterface[];

    constructor(public vehicServicio: VehiculosService) { }

    getVehiculo() {
        return this.vehicServicio.getVehiculos(this.documento).subscribe(listadoVehic => {
            this.searchResult = listadoVehic.items;
    });
    }
}

export interface RespInterface {
    items: DetalleVehiculoInterface[];
  }

  export interface DetalleVehiculoInterface {
    documento: string;
    dominio: string;
    marca: string;
    nombre: string;
  }
