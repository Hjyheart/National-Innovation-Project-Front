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

	private clubs: Array<Club[]> = [];

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
				clubs => {
					for(let i = 0; i < clubs.length;){
					  let three: Club[] = [];
					  for(let k = 0; k < 3; k++){
					    if (i < clubs.length){
                three.push(clubs[i]);
                i++;
              }else{
					      this.clubs.push(three);
					      console.table(this.clubs);
					      return;
              }
            }
            this.clubs.push(three);
          }
          console.table(this.clubs);
				}
			);
	}

	test(){
		console.log(this.clubs[0]);
	}
}
