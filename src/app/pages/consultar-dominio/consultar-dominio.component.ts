import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehiculosService } from '../../services/vehiculos.service';

@Component ({
    selector: 'app-consultar-dominio',
    templateUrl: './consultar-dominio.component.html'
})

export class ConsultarDominioComponent {

    public documento: string;

    constructor(public vehicServicio: VehiculosService) { }

    getVehiculo() {
        this.vehicServicio.getVehiculos(this.documento);
    }

}
