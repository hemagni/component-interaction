import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CountdownLocalVarParentComponent } from './countdown-local-var-parent/countdown-local-var-parent.component';
import { CountdownParentVcComponent } from './countdown-parent-vc/countdown-parent-vc.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HomeComponent } from './home/home.component';
import { MissionControlComponent } from './mission-control/mission-control.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VotetakerComponent } from './votetaker/votetaker.component';


const routes: Routes = [
  { path:"", redirectTo:"/home", pathMatch: "full" },
  { path:"home", component:HomeComponent },
  { path:"input-binding", component: HeroParentComponent },
  { path:"setter", component: NameParentComponent },
  { path: "ngOnChangeDemo", component: VersionParentComponent },
  { path: "vote-taker", component: VotetakerComponent },
  { path: "local-variable-demo", component: CountdownLocalVarParentComponent },
  { path: "view-child-demo", component: CountdownParentVcComponent },
  { path: "mission-control", component: MissionControlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
