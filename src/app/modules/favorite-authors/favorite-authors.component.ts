import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/shared/interfaces/author';
import { FavoriteAuthorsService } from './favorite-authors.service';

@Component({
  selector: 'app-favorite-authors',
  templateUrl: './favorite-authors.component.html',
  styleUrls: ['./favorite-authors.component.css']
})
export class FavoriteAuthorsComponent implements OnInit {

  constructor(private _favoriteAuthorsService: FavoriteAuthorsService) { }

  public authors: IAuthor[] = []
  public page = 1;
  public limit = 6;
  public totalPages = -1;

  paginate(array: IAuthor[], limit: number, page: number) {
    return array.slice((page - 1) * limit, page * limit);
  }

  getAuthorsList(page?: number) {
    if (page) {
      this.page = page;
    }
    let allAuthors = this._favoriteAuthorsService.getAuthros({ page: page ? page : this.page, limit: this.limit })
    this.totalPages = allAuthors.length / this.limit;
    this.authors = this.paginate(allAuthors, this.limit, this.page);
    console.log(this.totalPages);

  }

  ngOnInit(): void {
    this.getAuthorsList()
  }

}
