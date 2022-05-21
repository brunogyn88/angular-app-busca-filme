import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDescriptionComponent } from './pages/movie-description/movie-description.component';

const routes: Routes = [
  { path: '', component: MovieDescriptionComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
