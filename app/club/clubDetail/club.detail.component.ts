import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Club } from '../../entity/club';

import { ClubService } from '../../service/club.service';


@Component({
	moduleId: module.id,
	selector: 'my-club-detail',
	templateUrl: './club.detail.component.html'
})

export class ClubDetailComponent{

	private clubId: string;
	private club: Club;

	constructor(
  		private route: ActivatedRoute,
  		private router: Router,
  		private clubService: ClubService
  		){}

	ngOnInit() {
  		this.clubId = this.route.snapshot.params['id'];
			this.clubService.getClub(this.clubId)
									.subscribe(
										club => {this.club = club},
										error => {console.log(error)}
									);
	}

}
