import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from "@angular/core";
import { FilterBarComponent } from "../filter-bar/filter-bar.component";
import { NewsDashboardComponent } from "../news-dashboard/news-dashboard.component";
import { Article } from "src/app/types/interfaces";
import { ArticlesService } from "src/app/services/articles.service";
import { take } from "rxjs";

@Component({
  selector: "app-homepage",
  standalone: true,
  imports: [FilterBarComponent, NewsDashboardComponent],
  templateUrl: "./homepage.component.html",
  styleUrl: "./homepage.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
  articles: Article[] = [];
  results = 0;
  searchQuery = '';
  private articleService = inject(ArticlesService);
  private cdr = inject(ChangeDetectorRef)

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.articleService
      .getAllArticles()
      .pipe(take(1))
      .subscribe((res) => {
        this.articles = res.results;
        this.cdr.detectChanges();
      });
  }

  setSearchValue(e: string) {
    if (e) {
      this.articles = this.articles.filter(
        (article) => article.title.includes(e) || article.summary.includes(e)
      );
      this.results = this.articles.length;
      this.searchQuery = e;
      
    } else {
      this.getArticles();
      this.results = 0;
      this.searchQuery = '';
    }
  }
}
