import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeeComponent } from './homee/homee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListComponent } from './list/list.component'
import { AnnonceModule } from './annonce/annonce.module';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './nav/menu/menu.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeeComponent,
    ResidenceComponent,
    NotfoundComponent,
    NavComponent,
    MenuComponent,
    FormResidenceComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnonceModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
