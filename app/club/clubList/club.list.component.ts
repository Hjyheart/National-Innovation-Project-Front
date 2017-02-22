import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-club-list',
	templateUrl: './club.list.component.html'
})

export class ClubListComponent{

	constructor(
		private router: Router
		){}

	turn(){
		this.router.navigate(['/club', 1]);
	}
}