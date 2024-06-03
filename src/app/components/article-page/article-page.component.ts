import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { take } from 'rxjs';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/types/interfaces';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private articleService = inject(ArticlesService);

  articleId = '';
  article!: Article;

  ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe((params: Params) => this.articleId = params['id']);
    this.articleService.getArticle(this.articleId).pipe(take(1)).subscribe(res => this.article = res);
  }

}
