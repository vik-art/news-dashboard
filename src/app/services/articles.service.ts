import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { endPoints } from './ENDPOINTS';
import { Observable } from 'rxjs';
import { Article, HttpArticlesResponse } from '../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private http = inject(HttpClient);

  getAllArticles(): Observable<HttpArticlesResponse> {
    const url = `${environment.newsAPI}${endPoints.ALL_ARTICLES}`;
    return this.http.get<HttpArticlesResponse>(url);
  }

  getArticle(id: string): Observable<Article> {
    const url = `${environment.newsAPI}${endPoints.SELECTED_ARTICLE.replace(':id', id)}`;
    return this.http.get<Article>(url);
  }
}
