import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasksComponent } from './masks/masks.component';


const routes: Routes = [
  { path: 'masks', component: MasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
