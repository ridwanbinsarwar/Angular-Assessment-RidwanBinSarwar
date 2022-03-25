import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'authors', pathMatch: 'full' },
  { path: 'authors', loadChildren: () => import('./modules/authors/authors.module').then(m => m.AuthorsModule) },
  { path: 'favorite-authors', loadChildren: () => import('./modules/favorite-authors/favorite-authors.module').then(m => m.FavoriteAuthorsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
