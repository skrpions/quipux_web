import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { ListPlaylistsComponent } from './views/list-playlists/list-playlists.component';
import { FormPlaylistComponent } from './views/form-playlist/form-playlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailPlaylistComponent } from './views/detail-playlist/detail-playlist.component';


@NgModule({
  declarations: [
    ListPlaylistsComponent,
    FormPlaylistComponent,
    DetailPlaylistComponent,

  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule,
    ReactiveFormsModule

  ]
})
export class PlaylistsModule { }
