import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';
import { OpeningsComponent } from './openings/openings.component';
import { AddOpeningComponent } from './add-opening/add-opening.component';

const routes: Routes = [
  {path:"", pathMatch:'full',redirectTo: '/intro'},
  {path: 'intro', component: IntroComponent},
  {path: 'game', component: GameComponent},
  {path: 'openings', component: OpeningsComponent},
  {path: 'add', component: AddOpeningComponent},
  {path:'**', redirectTo: '/intro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
