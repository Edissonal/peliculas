import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { StarRatingComponent } from 'ng-starrating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculaspostergrid',
  templateUrl: './peliculaspostergrid.component.html',
  styleUrls: ['./peliculaspostergrid.component.css']
})
export class PeliculaspostergridComponent implements OnInit {
  @Input() movies: Movie[];
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.movies);
    }

  onMovieClick(movie: Movie) {

    this.router.navigate(['/pelicula', movie.id]);
    }
}
