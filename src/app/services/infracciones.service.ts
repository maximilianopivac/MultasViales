import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getQueryValue } from '@angular/core/src/view/query';

@Injectable({
  providedIn: 'root'
})
export class InfraccionesService {

  url = 'https://sistemas.seguridad.mendoza.gov.ar/apex/vial/multasvialesinfracciones/';
  urlInfraccionSearch = 'https://sistemas.seguridad.mendoza.gov.ar/apex/vial/multasvialesinfracciones/search=';

  constructor(private httpClient: HttpClient) {
  }

  findInfractions(): any {
      return this.httpClient.get(this.url);
    }


  buscarInfraccion(infraccionSearch): any {
    return this.httpClient.get(this.urlInfraccionSearch + infraccionSearch);
  }
}
