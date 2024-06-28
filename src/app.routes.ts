import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './app/first/first.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'first', component: FirstComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }