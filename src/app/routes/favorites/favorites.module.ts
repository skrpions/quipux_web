import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { ListFavoritesComponent } from './views/list-favorites/list-favorites.component';


@NgModule({
  declarations: [
    ListFavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
