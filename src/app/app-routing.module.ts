import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';
import { OpeningsComponent } from './openings/openings.component';
import { AddOpeningComponent } from './add-opening/add-opening.component';

const routes: Routes = [
  {path:"", pathMatch:"full",redirectTo: "/Intro"},
  {path: "Intro", component: IntroComponent},
  {path: "Game", component: GameComponent},
  {path: "Openings", component: OpeningsComponent},
  {path: "Add", component: AddOpeningComponent},
  {path:"**", redirectTo: "/Intro"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
