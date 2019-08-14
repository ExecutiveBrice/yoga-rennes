import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PresentationComponent } from './presentation/presentation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { AnimationComponent } from './animation/animation.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { AdherentsComponent } from './adherents/adherents.component';
import { LocationComponent } from './location/location.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    AccueilComponent,
    InspirationComponent,
    AnimationComponent,
    LocalisationComponent,
    AdherentsComponent,
    LocationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
