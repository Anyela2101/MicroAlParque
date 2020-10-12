import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { ActitudesComponent } from './actitudes/actitudes.component';
import { PracticasComponent } from './practicas/practicas.component';
import { ExamenesComponent } from './examenes/examenes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PersonalComponent,
    ConocimientosComponent,
    ActitudesComponent,
    PracticasComponent,
    ExamenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
