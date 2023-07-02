import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { ListPlaylistsComponent } from './views/list-playlists/list-playlists.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailPlaylistComponent } from './views/detail-playlist/detail-playlist.component';
import { TranslateService } from 'src/app/shared/services/translate.service';
import { TranslatePipe } from 'src/app/shared/pipes/translate.pipe';

// Fx para traducir los textos de los componentes
export function translateFactory(provider: TranslateService){
  return () => provider.getData();
 }

@NgModule({
  declarations: [
    ListPlaylistsComponent,
    DetailPlaylistComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PlaylistsModule { }
