import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from '../app/page-not-found/page-not-found.component';
const routes: Routes = [
{ path: '', loadChildren: () => import('./task/task.module').then(m => m.TaskModule) },
{ path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes , { })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
