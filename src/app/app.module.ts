import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthApplication } from './routes/auth/application/auth-application';
import { StorageApplication } from './routes/auth/application/storage-application';
import { AuthInfrastructure } from './routes/auth/infrastructure/auth-infrastructure';
import { StorageInfrastructure } from './routes/auth/infrastructure/storage-infrastructure';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaylistApplication } from './routes/playlists/application/playlist-application';
import { PlaylistInfrastructure } from './routes/playlists/infrastructure/playlist-infrastructure';

// Declaron constantes para los providers
const application = [
  AuthApplication,
  StorageApplication,
  PlaylistApplication
];

const infrastructure = [
  AuthInfrastructure,
  StorageInfrastructure,
  PlaylistInfrastructure
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ...application,
    ...infrastructure,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
