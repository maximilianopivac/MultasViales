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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListadoInfraccionesComponent,
    NavbarComponent,
    ErrorComponent,
    ConsultarDominioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [InfraccionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
