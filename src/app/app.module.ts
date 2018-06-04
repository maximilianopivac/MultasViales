import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoInfraccionesComponent } from './pages/listado-infracciones/listado-infracciones.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { InfraccionesService } from './services/infracciones.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { APP_ROUTING } from './router';
import { ErrorComponent } from './pages/error-page/error.page.component';
import { ConsultarDominioComponent } from './pages/consultar-dominio/consultar-dominio.component';
import {FormsModule} from '@angular/forms';
import { ConsultarDeudaComponent } from './pages/emision-deuda/consultar-deuda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoInfraccionesComponent,
    NavbarComponent,
    ErrorComponent,
    ConsultarDominioComponent,
    ConsultarDeudaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [InfraccionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
