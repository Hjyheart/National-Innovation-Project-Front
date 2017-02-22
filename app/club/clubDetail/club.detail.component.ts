import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core'

import { ClubService } from '../../service/club.service';


@Component({
	moduleId: module.id,
	selector: 'my-club-detail',
	templateUrl: './club.detail.component.html'
})

export class ClubDetailComponent{

	private clubId: number;

	constructor(
  		private route: ActivatedRoute,
  		private router: Router,
  		private service: ClubService
  		){}

	ngOnInit() {
  		this.clubId = +this.route.snapshot.params['id'];
	}

}