import { Component, OnInit, inject } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import { Article } from 'src/app/types/interfaces';
import { CroppedTextPipe } from 'src/app/pipes/cropped-text.pipe';
import { MatIconModule } from '@angular/material/icon';
import { FormattedDate } from 'src/app/pipes/formatted-date.pipe';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-news-dashboard',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule, CroppedTextPipe, MatIconModule, FormattedDate, RouterModule],
  templateUrl: './news-dashboard.component.html',
  styleUrl: './news-dashboard.component.scss'
})
export class NewsDashboardComponent implements OnInit {
  results = 0;
  articles: Article[] = [];
  private articleService = inject(ArticlesService);

   ngOnInit(): void {
     this.articleService.getAllArticles().subscribe(res => {
       this.articles = res.results;
      console.log(res.results)   })
  }
}
