import { Component, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/shared/interfaces/author';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private _authorService: AuthorService) { }

  public authors: IAuthor[] = []
  public page = 1;
  public limit = 6;
  public totalPages = -1;

  getAuthorsList(page?: number) {
    if (page) {
      this.page = page;
    }

    this._authorService.getAuthros({ page: page ? page : this.page, limit: this.limit })
      .subscribe(data => {
        this.authors = data.results;
        this.totalPages = data.totalPages;
      })
  }

  ngOnInit(): void {
    this.getAuthorsList()
  }

}
