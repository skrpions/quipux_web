import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlaylistsComponent } from './views/list-playlists/list-playlists.component';
import { DetailPlaylistComponent } from './views/detail-playlist/detail-playlist.component';

const routes: Routes = [
  {
    path: '',
    component: ListPlaylistsComponent,
    outlet: 'child' // Este es el nombre del router-outler más cercano. Está en home-page.html
  },
  {
    /* path: 'detail/:id', */
    path: 'detail/:id',
    component: DetailPlaylistComponent,
    outlet: 'child' // Este es el nombre del router-outler más cercano. Está en home-page.html
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
