import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ClubService } from '../../service/club.service';

import { Club } from '../../entity/club';

@Component({
	moduleId: module.id,
	selector: 'my-club-list',
	templateUrl: './club.list.component.html',
	providers:[ClubService]
})

export class ClubListComponent implements OnInit {

	private clubs: Club[];

	constructor(
		private router: Router,
		private clubService: ClubService
		){}

	ngOnInit(){
		this.getClubs();
	}

	getClubs(){
		this.clubService.getClubs()
			.subscribe(
				clubs => this.clubs = clubs
			);
	}

	test(){
		console.log(this.clubs[0]);
	}
}
