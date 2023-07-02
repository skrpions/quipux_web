import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthApplication } from './routes/auth/application/auth-application';
import { StorageApplication } from './routes/auth/application/storage-application';
import { AuthInfrastructure } from './routes/auth/infrastructure/auth-infrastructure';
import { StorageInfrastructure } from './routes/auth/infrastructure/storage-infrastructure';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaylistApplication } from './routes/playlists/application/playlist-application';
import { PlaylistInfrastructure } from './routes/playlists/infrastructure/playlist-infrastructure';
import { SongApplication } from './routes/songs/application/song-application';
import { SongInfrastructure } from './routes/songs/infrastructure/song-infrastructure';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { TranslateService } from './shared/services/translate.service';
import { translateFactory } from './routes/playlists/playlists.module';

// Declaron constantes para los providers
const application = [
  AuthApplication,
  StorageApplication,
  PlaylistApplication,
  SongApplication
];

const infrastructure = [
  AuthInfrastructure,
  StorageInfrastructure,
  PlaylistInfrastructure,
  SongInfrastructure
];

const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
]

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
    TranslateService,{
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
    ...application,
    ...infrastructure,
    ...interceptors,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
