import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {PersonalComponent} from '../app/personal/personal.component';
import {ConocimientosComponent} from '../app/conocimientos/conocimientos.component';
import {ActitudesComponent} from '../app/actitudes/actitudes.component';
import {PracticasComponent} from '../app/practicas/practicas.component';
import {ExamenesComponent} from '../app/examenes/examenes.component';

const routes: Routes = [ 
  {path: '', component: HomeComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'conocimientos', component: ConocimientosComponent},
  {path: 'actitudes', component: ActitudesComponent},
  {path: 'practicas', component: PracticasComponent},
  {path: 'examenes', component: ExamenesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
