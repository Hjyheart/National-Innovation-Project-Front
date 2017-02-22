import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ClubListComponent } from './clubList/club.list.component';
import { ClubDetailComponent } from './clubDetail/club.detail.component';

import { ClubService } from '../service/club.service';

import { ClubRoutingModule } from './club.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClubRoutingModule
  ],
  declarations: [
    ClubListComponent,
    ClubDetailComponent
  ],
  providers: [ ClubService ]
})
export class ClubModule {}
