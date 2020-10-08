import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HomeComponent } from './home/home.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VotetakerComponent } from './votetaker/votetaker.component';


const routes: Routes = [
  { path:"", redirectTo:"/home", pathMatch: "full" },
  { path:"home", component:HomeComponent },
  { path:"input-binding", component: HeroParentComponent },
  { path:"setter", component: NameParentComponent },
  { path: "ngOnChangeDemo", component: VersionParentComponent },
  { path: "vote-taker", component: VotetakerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
