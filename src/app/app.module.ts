import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { PonyDetailComponent } from './pony-detail/pony-detail.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { LocationRacePipe } from './location-race.pipe';
import { AddPonyComponent } from './add-pony/add-pony.component';
import { RouterModule, Routes} from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { UpdatePonyComponent } from './update-pony/update-pony.component';
import { AddRaceComponent } from './add-race/add-race.component';
import { UpdatePonyReactComponent } from './update-pony-react/update-pony-react.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { Observable } from "rxjs";
import { UserGuard} from "./user.guard";


const ROUTES: Routes = [
  {path: '', component: PoniesComponent},
  {path: 'races', component: RacesComponent, canActivate: [UserGuard]},
  {path: 'add-pony', component: AddPonyComponent, canActivate: [UserGuard]},




];

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyDetailComponent,
    RaceDetailComponent,
    LocationRacePipe,
    AddPonyComponent,
    MenuComponent,
    UpdatePonyComponent,
    AddRaceComponent,
    UpdatePonyReactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
