import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClubListComponent }    from './clubList/club.list.component';
import { ClubDetailComponent }  from './clubDetail/club.detail.component';

const clubsRoutes: Routes = [
  { path: 'clubs',  component: ClubListComponent },
  { path: 'club/:id', component: ClubDetailComponent }
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
