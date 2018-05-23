import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListadoInfraccionesComponent } from './pages/listado-infracciones/listado-infracciones.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './pages/error-page/error.page.component';

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'infracci', component: ListadoInfraccionesComponent},
    {path: '**', component: ErrorComponent}  // pathMatch: 'full' , redirectTo: '/infracci'}
];
export const APP_ROUTING = RouterModule.forRoot(appRoutes);
