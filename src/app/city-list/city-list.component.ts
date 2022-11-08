import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
	selector: 'app-city-list',
	templateUrl: './city-list.component.html',
	styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

	Cities: City[] = [
		{ name: 'Grand Rapids', state: 'MI', population: 100000 },
		{ name: 'Traverse City', state: 'MI', population: 50000 }
	];

	NewName: string = '';
	NewState: string = '';
	NewPopulation: number = 0;

	showAdd: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	showAddForm() {
		this.showAdd = true;
	}

	add() {
		this.Cities.push({
			name: this.NewName,
			state: this.NewState,
			population: this.NewPopulation
		});
		this.NewName = '';
		this.NewState = '';
		this.NewPopulation = 0;
		this.showAdd = false;
	}

	cancel() {
		// I just pasted these four lines from the add() function!
		this.NewName = '';
		this.NewState = '';
		this.NewPopulation = 0;
		this.showAdd = false;
	}

}
