import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteAuthorsRoutingModule } from './favorite-authors-routing.module';
import { FavoriteAuthorsComponent } from './favorite-authors.component';
import { ListItemModule } from 'src/app/shared/components/list-item/list-item.module';
import { FavoriteAuthorsService } from './favorite-authors.service';


@NgModule({
  declarations: [
    FavoriteAuthorsComponent,
  ],
  imports: [
    CommonModule,
    FavoriteAuthorsRoutingModule,
    ListItemModule
  ],
  providers: [FavoriteAuthorsService]
})
export class FavoriteAuthorsModule { }
