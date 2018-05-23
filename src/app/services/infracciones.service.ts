import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfraccionesService {

  url = 'https://sistemas.seguridad.mendoza.gov.ar/apex/vial/multasvialesinfracciones/';
  itemList: detalleInfraccionesInterface[];

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
}
