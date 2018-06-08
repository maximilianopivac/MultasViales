import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getQueryValue } from '@angular/core/src/view/query';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  url = 'https://sistemas.seguridad.mendoza.gov.ar/apex/vial/multasvialesinfracciones/';

  constructor(private httpClient: HttpClient) {
  }

  getVehiculos(documento: string): any {
    return this.httpClient.get(this.url + documento);
    }
  }
