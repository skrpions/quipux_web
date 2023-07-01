import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { ListPlaylistsComponent } from './views/list-playlists/list-playlists.component';
import { FormPlaylistComponent } from './views/form-playlist/form-playlist.component';


@NgModule({
  declarations: [
    ListPlaylistsComponent,
    FormPlaylistComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule { }
