import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getQueryValue } from '@angular/core/src/view/query';

@Injectable({
  providedIn: 'root'
})
export class InfraccionesService {

  url = 'https://sistemas.seguridad.mendoza.gov.ar/apex/vial/multasvialesinfracciones/';
  urlInfraccionSearch = 'https://sistemas.seguridad.mendoza.gov.ar/apex/vial/multasvialesinfracciones/search=';
  itemList: detalleInfraccionesInterface[];

  constructor(private httpClient: HttpClient) {
  }

  findInfractions() {
    this.httpClient.get<respInterface>(this.url).subscribe(dataList => {
      this.itemList = dataList.items;
    });
  }

  buscarInfraccion(infraccionSearch) {
    this.httpClient.get<respInterface>(this.urlInfraccionSearch + infraccionSearch).subscribe(infraccionList => {
      this.itemList = infraccionList.items;
    });
  }
}
// tslint:disable-next-line:class-name
export interface respInterface {
  next: string;
  items: detalleInfraccionesInterface[];
}

// tslint:disable-next-line:class-name
export interface detalleInfraccionesInterface {
  ifrid: number;
  ifrcodigo: string;
  ifrds: string;
  ifrcosto: number;
}
// debounce
