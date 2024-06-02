import { Component } from '@angular/core';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { NewsDashboardComponent } from '../news-dashboard/news-dashboard.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FilterBarComponent, NewsDashboardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
