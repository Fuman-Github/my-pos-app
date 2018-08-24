import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { LayoutComponent } from '@app/layout/layout.component';
import { Error404Component } from '@app/core/error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', loadChildren: './layout/layout.module#LayoutModule'},
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/' + 404}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
