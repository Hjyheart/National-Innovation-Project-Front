import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClubListComponent }    from './clubList/club.list.component';
import { ClubDetailComponent }  from './clubDetail/club.detail.component';

import { LoginRouteGuard }      from '../service/login.route.guard.service'

const clubsRoutes: Routes = [
  {
    path: 'clubs',
    component: ClubListComponent,
    canActivate: [LoginRouteGuard]
  },
  {
    path: 'club/:id',
    component: ClubDetailComponent,
    canActivate: [LoginRouteGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(clubsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ClubRoutingModule { }
