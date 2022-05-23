import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { IMovieResponse } from 'src/app/interface/movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss'],
})
export class MovieDescriptionComponent implements OnInit {
  public formMovie: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
  });
  public movie: IMovieResponse | undefined;
  public listMovieFavorite: IMovieResponse[] = [];

  public arrayStarsRating: [] = [];
  public favorite: boolean = false;

  faHeart = faHeart;

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.getListFavoriteMovies();
  }

  getMovie(): void {
    const name = this.formMovie.get('name')?.value;
    this.movieService.getMovie(name).subscribe({
      next: (res) => {
        this.movie = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  reset(): void {
    this.formMovie.reset();
    this.movie = undefined;
  }

  onKeypressEvent(event: any): void {
    if (event.key === 'Enter') this.getMovie();
  }

  addAndRemovefavoriteMovies(): void {
    if (this.favorite && this.movie) {
      this.movieService.removeMovieFavotie(this.movie);
      this.getListFavoriteMovies();
      this.favorite = false;
    } else {
      this.movieService.setMovieFavotie(this.movie);
      this.favorite = true;
      this.getListFavoriteMovies();
    }
  }

  getListFavoriteMovies(): void {
    this.listMovieFavorite = this.movieService.getMovieFavotie();
  }

  openMoviteFavorite(movieFavorite: IMovieResponse) {
    this.movie = movieFavorite;
    this.favorite = true;
  }
}
