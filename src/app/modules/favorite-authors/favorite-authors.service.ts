import { Injectable } from '@angular/core';
import { IAuthor } from 'src/app/shared/interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class FavoriteAuthorsService {

  constructor() { }

  getAuthros({ page, limit }: { page: number, limit: number }): IAuthor[] {
    let authors = JSON.parse(localStorage.getItem("authors") || "[]");
    return authors;
  }
}
