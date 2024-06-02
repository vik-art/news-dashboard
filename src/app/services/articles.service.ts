import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { endPoints } from './ENDPOINTS';
import { Observable } from 'rxjs';
import { HttpArticlesResponse } from '../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private http = inject(HttpClient);

  getAllArticles(): Observable<HttpArticlesResponse> {
    const url = `${environment.newsAPI}${endPoints.ALL_ARTICLES}`;
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    console.log(formattedDate);
    return this.http.get<HttpArticlesResponse>(url);
  }
}
