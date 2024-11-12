import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimaliComponent } from './animali/animali.component';
import { FruttaComponent } from './frutta/frutta.component';

const routes: Routes = [
  { path: 'animali', component: AnimaliComponent},
  { path: 'frutta', component: FruttaComponent},
  {path: '', redirectTo: '/animali', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
