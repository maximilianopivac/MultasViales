import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { getQueryValue } from '@angular/core/src/view/query';

@Injectable({
  providedIn: 'root'
})
export class InfraccionesService {

  url = 'https://sistemas.seguridad.mendoza.gov.ar/apex/vial/multasvialesinfracciones/';
  urlSearch = 'https://sistemas.seguridad.mendoza.gov.ar/apex/vial/multasvialesinfracciones/{searchInput}';
  itemList: detalleInfraccionesInterface[];
  searchResult: detalleInfraccionesInterface[];

  constructor(private httpClient: HttpClient) {
  }

  findInfractions() {
    this.httpClient.get<respInterface>(this.url).subscribe(dataList => {
      this.itemList = dataList.items;
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
  ifrds: string;
  ifrcosto: number;
}

