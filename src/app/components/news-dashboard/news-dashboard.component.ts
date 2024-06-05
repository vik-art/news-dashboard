import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { NgFor } from "@angular/common";
import { Article } from "src/app/types/interfaces";
import { CroppedTextPipe } from "src/app/pipes/cropped-text.pipe";
import { MatIconModule } from "@angular/material/icon";
import { FormattedDate } from "src/app/pipes/formatted-date.pipe";
import { RouterModule } from "@angular/router";
import { NgxHighlightWordsModule } from "ngx-highlight-words";

@Component({
  selector: "app-news-dashboard",
  standalone: true,
  imports: [
    NgFor,
    MatCardModule,
    MatButtonModule,
    CroppedTextPipe,
    MatIconModule,
    FormattedDate,
    RouterModule,
    NgxHighlightWordsModule,
  ],
  templateUrl: "./news-dashboard.component.html",
  styleUrl: "./news-dashboard.component.scss",
})
export class NewsDashboardComponent {
  @Input() articles: Article[] = [];
  @Input() results = 0;
  @Input() query = '';
}
