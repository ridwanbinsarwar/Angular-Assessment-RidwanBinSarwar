import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAuthor } from '../../interfaces/author';
import { ListItemService } from './list-item.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() public authors: IAuthor[] | undefined;
  @Input() public page: number = 1;
  @Input() public maxPage: number = 100000;
  @Input() public isFavAuthorList: boolean = false;


  @Output() public paginationEvent = new EventEmitter();

  public favoriteAuthorMap;

  constructor(private _listItemService: ListItemService) {
    this.favoriteAuthorMap = this._listItemService.getFavoriteAuthorMap();
  }

  ngOnInit(): void {

  }

  onPagination(page: number) {
    this.paginationEvent.emit(page);
  }
  addFavoriteAuthor(author: IAuthor) {
    this._listItemService.addToFavoriteList(author);
    this.favoriteAuthorMap = this._listItemService.getFavoriteAuthorMap();

  }
  removeFavoriteAuthor(author: IAuthor) {
    this._listItemService.removeFromFavoriteList(author);
    this.favoriteAuthorMap = this._listItemService.getFavoriteAuthorMap();
    if (this.isFavAuthorList)
      this.paginationEvent.emit(this.page);

  }
}
