import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFavoritesComponent } from './views/list-favorites/list-favorites.component';

const routes: Routes = [
  {
    path: '',
    component: ListFavoritesComponent,
    outlet: 'child' // Este es el nombre del router-outler más cercano. Está en home-page.html
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
