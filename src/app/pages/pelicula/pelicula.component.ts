import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movies-response';
import {Location} from "@angular/common";
import { Cast } from '../../interfaces/credits-response';
import { combineLatest } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  
  public pelicula: MovieResponse;
  public cast: Cast[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService,
              private location:Location,
              private router:Router) { 
              
  }
  
  ngOnInit() {

    const {id} = this.activatedRoute.snapshot.params;
    combineLatest([
     
      this.peliculasService.getPeliculaDetalle(id),
      this.peliculasService.getCats(id)
     
    ]).subscribe(([pelicula,cast]) => {
      console.log(pelicula, cast)
      if (!pelicula) {
        this.router.navigateByUrl('/home');  
        return;  
      }
      this.pelicula = pelicula;
      this.cast = cast.filter(actor =>actor.profile_path !=null);
    
      
    });

   
   
   
    /*  .subscribe(movie => { 
        if (!movie) {
          this.router.navigateByUrl('/home');  
          return;  
            }
;
        this.pelicula = movie;
      });
     
      .subscribe(cast => { 
        console.log(cast);
        this.cast = cast.filter(actor =>actor.profile_path !=null);

      });*/
  }
  onRegresar() {
    this.location.back();
  }

}
