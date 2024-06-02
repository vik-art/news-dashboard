import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [{
  path: '', component: HomepageComponent, pathMatch: 'full',
},
  {
  path: 'article/:id', component: ArticlePageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
