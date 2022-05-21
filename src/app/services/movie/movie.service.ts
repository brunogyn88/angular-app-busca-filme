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
}
