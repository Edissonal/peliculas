import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PeliculaspostergridComponent } from './peliculaspostergrid/peliculaspostergrid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastslideshowComponent } from './castslideshow/castslideshow.component';


@NgModule({
  declarations: [NavbarComponent, SlideshowComponent, PeliculaspostergridComponent, CastslideshowComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ], exports: [
    NavbarComponent,
    SlideshowComponent,
    PeliculaspostergridComponent,
    CastslideshowComponent
  ]
})
export class ComponentsModule { }
