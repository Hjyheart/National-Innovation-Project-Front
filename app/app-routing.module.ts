import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }         from './app.component';
import { HomeComponent }        from './home/home.component';
import { ErrorComponent }		    from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/clubs', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  // { path: 'club', component: ClubComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
