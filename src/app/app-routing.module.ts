import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { AnimationComponent } from './animation/animation.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { AdherentsComponent } from './adherents/adherents.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'inspiration', component: InspirationComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'localisation', component: LocalisationComponent },
  { path: 'adherents', component: AdherentsComponent },
  { path: 'location', component: LocationComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
