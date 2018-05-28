import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getQueryValue } from '@angular/core/src/view/query';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  url = 'https://sistemas.seguridad.mendoza.gov.ar/apex/vial/multasvialesinfracciones/';
  searchResult: detalleVehiculoInterface[];

  constructor(private httpClient: HttpClient) {
  }

  getVehiculos(documento: string) {
    this.httpClient.get<respInterface>(this.url + documento).subscribe(listadoVehic => {
      this.searchResult = listadoVehic.items;
    });
    console.log(this.searchResult);
  }
}

// tslint:disable-next-line:class-name
export interface respInterface {
  items: detalleVehiculoInterface[];
}

// tslint:disable-next-line:class-name
export interface detalleVehiculoInterface {
  documento: string;
  dominio: string;
  marca: string;
  nombre: string;

}
// debounce
