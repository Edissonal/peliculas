import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { tap, map, catchError } from 'rxjs/operators';
import { Params } from '@angular/router';
import { MovieResponse } from '../interfaces/movies-response';
import { CreditsResponse, Cast } from '../interfaces/credits-response';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private baseUrl = "https://api.themoviedb.org/3";
  private CarteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) {
    
  }

  get params() {
      return {
        api_key: 'c8f7937082df583f801716b72f086734',
        language: 'es-ES',
        page: this.CarteleraPage.toString()
      }
  }
  resetCarteleraPage() { 
    this.CarteleraPage = 1;
  }
  
  getCartelera(): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);

     }

    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?`, {
      params: this.params
    }).pipe(
      map((resp) => resp.results),
      tap(() => {
        this.CarteleraPage += 1;
        this.cargando = false;
      })
    );
  }

  buscarPeliculas(texto: string):Observable<Movie[]> {
    const params = { ...this.params, page:' 1',query:texto };
   return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(
      map(resp=> resp.results)
    )
  }
  
  getPeliculaDetalle(id:string) {
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError( err => of(null) )
    );
  }

  getCats(id:string):Observable<Cast[]> {
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, {
      params: this.params
    }).pipe(
      map(resp => resp.cast),
      catchError( err => of([]) ),
    );
  }

}

