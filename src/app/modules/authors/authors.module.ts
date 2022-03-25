import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { ListItemModule } from 'src/app/shared/components/list-item/list-item.module';
import { AuthorService } from './author.service';


@NgModule({
  declarations: [
    AuthorsComponent,

  ],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    ListItemModule
  ],
  providers: [AuthorService]
})
export class AuthorsModule { }
