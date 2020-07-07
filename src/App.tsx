import React from 'react';
import './App.css';
import { stringify } from 'querystring';
//import MoreInfo from './Components/MoreInfo';

function App() {
	// let name: string = "Christoph";
	// let age: number = 44;
	// let isDeveloper: boolean = true;
	// let scores: number[] = [2, 2, 6, 2, 6, 2];
	// let groups: string[] = ['developers', 'members', 'employees'];

	// const companyInfo: [number, string, boolean] = [23, "Anton Inc.", false];

	// enum Position { first, second };
	// const position: Position = Position.first;

	// const displayGreeting = (name: string): void => {
	// 	console.log(`Hello ${name}`);
	// }
	// displayGreeting('Christopher');

	// let companyMessage: string = '';
	// if (companyInfo[0]) {
	// 	companyMessage = `Company is id=${companyInfo[0]} and name=${companyInfo[1]}`;
	// } else {
	// 	companyMessage = `Company info not shown`;
	// }

	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<p>Name: <span className="data">{name}</span></p>
	// 			<p>Age: <span className="data">{age}</span></p>
	// 			<p>Is a developer: <span className="data">{isDeveloper ? 'yes' : 'no'}</span></p>
	// 			<p>Scores: <span className="data">{scores.join(', ')}</span></p>
	// 			<p>Groups: <span className="data">{groups.join(', ')}</span></p>
	// 			<p>Company: <span className="data">{companyMessage}</span></p>
	// 			<MoreInfo status={"finished"} approved={true} numberOfErrors={3} />
	// 		</header>
	// 	</div>
	// );

	const largeName = (person: { name: string }): string => person.name.toUpperCase();

	const p1 = {
		name: "Jim",
		age: 34
	}

	interface IFlashcard {
		getFront(): string;
		getBack(): string;
	}

	class Book implements IFlashcard {
		constructor(title: string, author: string) {
			this.title = title;
			this.author = author;
		}
		title = "";
		author = "";
		getFront() {
			return this.title;
		}
		getBack() {
			return this.author;
		}

	}

	const book = new Book('Letters to a Young Contrarian', 'Christopher Hitchens');


	//const numbers = [3, 6, 4, 6, 4];
	const numbers: Array<number> = [3, 5, 2, 5, 3];

	let emp1: { firstName: string; age: number };

	emp1 = { firstName: 'Joe', age: 34 };

	const person: { firstName: string; age: number } = { firstName: 'Charles', age: 43 };

	console.log(emp1);
	console.log(person);
	console.log(numbers);
	console.log(typeof numbers);
	console.log(numbers instanceof Array);

	const name: string = largeName(p1);

	return (
		<div className="App">
			<header className="App-header">
				<p>{name} {person.firstName}</p>
				<p>{book.title}</p>
				<hr />
				<div>Front: {book.getFront()}</div>
				<div>Back: {book.getBack()}</div>
			</header>
		</div>
	)

}

export default App;
