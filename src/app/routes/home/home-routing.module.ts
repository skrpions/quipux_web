import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'favorites',
    loadChildren: () => import('./../favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'playlist',
    loadChildren: () => import('./../playlists/playlists.module').then(m => m.PlaylistsModule)
  },
  {
      path: '**',//TODO 404 cuando no existe la ruta
      redirectTo: '/favorites'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
