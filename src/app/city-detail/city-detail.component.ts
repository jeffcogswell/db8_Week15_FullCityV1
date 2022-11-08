// We need to manually add "Input" to the next line:
import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';

@Component({
	selector: 'app-city-detail',
	templateUrl: './city-detail.component.html',
	styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

	@Input() TheCity: City = {
		name: 'Detroit',
		state: 'MI',
		population: 400000
	}

	editMode: boolean = false;
	changeName: string = '';
	changeState: string = '';
	changePop: number = 0;

	constructor() { }

	ngOnInit(): void {
	}

	edit() {
		// Copy existing data into edit text boxes
		this.changeName = this.TheCity.name;
		this.changeState = this.TheCity.state;
		this.changePop = this.TheCity.population;
		this.editMode = true;
	}

	delete() {
		alert('Delete!');
	}

	saveChanges() {
		// Copy the text boxes back into the object's data
		this.TheCity.name = this.changeName;
		this.TheCity.state = this.changeState;
		this.TheCity.population = this.changePop;
		this.editMode = false;
	}

	cancelChanges() {
		this.editMode = false;
	}

}
