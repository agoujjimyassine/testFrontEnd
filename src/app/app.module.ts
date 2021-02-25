import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { AdministratifComponent } from './administratif/administratif.component';
import { AdresseComponent } from './adresse/adresse.component';
import { ResponsablesComponent } from './responsables/responsables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { EtablissementsComponent } from './etablissements/etablissements.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavigationComponent } from './navigation/navigation.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AdministratifComponent,
    AdresseComponent,
    ResponsablesComponent,
    EtablissementsComponent,
    NavigationComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
