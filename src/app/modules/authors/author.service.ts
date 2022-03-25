import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from "../../config/constants"
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthros({ page, limit }: { page: number, limit: number }): Observable<any> {
    return this.http.get<any>(AppConstants.API_ENDPOINT + `authors?limit=${limit}&page=${page}`)
      ;
  }
}
