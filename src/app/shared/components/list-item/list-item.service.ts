import { Injectable } from '@angular/core';
import { IAuthor } from '../../interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  constructor() { }

  addToFavoriteList(author: IAuthor) {

    let favoriteAuthorMap = JSON.parse(localStorage.getItem("favoriteAuthorMap") || "{}");
    if (!favoriteAuthorMap[author._id]) {
      favoriteAuthorMap[author._id] = "true"
      localStorage.setItem("favoriteAuthorMap", JSON.stringify(favoriteAuthorMap));

      let authors = JSON.parse(localStorage.getItem("authors") || "[]");
      authors.push(author);
      localStorage.setItem("authors", JSON.stringify(authors));
    }
  }

  getFavoriteAuthorMap() {
    let favoriteAuthorMap = JSON.parse(localStorage.getItem("favoriteAuthorMap") || "{}");
    return favoriteAuthorMap;
  }

  removeFromFavoriteList(author: IAuthor) {

    let favoriteAuthorMap = JSON.parse(localStorage.getItem("favoriteAuthorMap") || "{}");
    if (favoriteAuthorMap[author._id]) {
      delete favoriteAuthorMap[author._id];
      localStorage.setItem("favoriteAuthorMap", JSON.stringify(favoriteAuthorMap));

      let authors = JSON.parse(localStorage.getItem("authors") || "[]");
      var removeIndex = authors.map((item: IAuthor) => item._id).indexOf(author._id);

      ~removeIndex && authors.splice(removeIndex, 1);
      localStorage.setItem("authors", JSON.stringify(authors));
    }
  }
}
