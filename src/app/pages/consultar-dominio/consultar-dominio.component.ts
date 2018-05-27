import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component ({
    selector: 'app-consultar-dominio',
    templateUrl: './consultar-dominio.component.html'
})

export class ConsultarDominioComponent {

    public documento = 'Test';

    constructor() {

    }

    getVehiculo(inputValue) {
        alert('abc was called ' + inputValue.value);
    }


}
