import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovieResponse } from 'src/app/interface/movie';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public configUrl = environment.configUrl;
  public apiKey = environment.apiKey;
  private keyFavorite: string = 'list-favorite-movies';
  constructor(private http: HttpClient) {}

  /**
   * Function for search movie
   * @param nameMovie name movie
   * @returns IMovieResponse
   */
  getMovie(nameMovie: string): Observable<IMovieResponse> {
    return this.http.get<IMovieResponse>(this.configUrl, {
      params: {
        t: nameMovie,
        apiKey: this.apiKey,
      },
    });
  }

  /**
   * Function set Movie Favorite in localStorage
   * @param movie name movie, type IMovieResponse
   */
  setMovieFavotie(movie: IMovieResponse | undefined): void {
    let arrayMoviesFavorite = this.getMovieFavotie();
    if (movie) {
      arrayMoviesFavorite.push(movie);
      localStorage.setItem(
        this.keyFavorite,
        JSON.stringify(arrayMoviesFavorite)
      );
    }
  }

  /**
   * Function get Movie Favorite in localStorage
   * @returns IMovieResponse[]
   */
  getMovieFavotie(): IMovieResponse[] {
    const arrayMoviesFavorite = localStorage.getItem(this.keyFavorite);
    return arrayMoviesFavorite ? JSON.parse(arrayMoviesFavorite) : [];
  }

  /**
   * Function remove a Movie Favorite in localStorage
   * @param movie name movie, type IMovieResponse
   */
  removeMovieFavotie(movie: IMovieResponse): void {
    let arrayMoviesFavorite = this.getMovieFavotie();
    arrayMoviesFavorite = arrayMoviesFavorite.filter(
      (item) => item.Title !== movie.Title
    );
    localStorage.setItem(this.keyFavorite, JSON.stringify(arrayMoviesFavorite));
  }
}
