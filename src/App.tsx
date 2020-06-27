import React from 'react';
import './App.css';
import MoreInfo from './Components/MoreInfo';

function App() {
	let name: string = "Christoph";
	let age: number = 43;
	let isDeveloper: boolean = true;
	let scores: number[] = [2, 2, 6, 2, 6, 2];
	let groups: string[] = ['developers', 'members', 'employees'];

	const companyInfo: [number, string, boolean] = [23, "Anton Inc.", false];

	enum Position { first, second };
	const position: Position = Position.first;

	const displayGreeting = (name: string): void => {
		console.log(`Hello ${name}`);
	}
	displayGreeting('Christopher');

	let companyMessage: string = '';
	if (companyInfo[0]) {
		companyMessage = `Company is id=${companyInfo[0]} and name=${companyInfo[1]}`;
	} else {
		companyMessage = `Company info not shown`;
	}

	return (
		<div className="App">
			<header className="App-header">
				<p>Name: <span className="data">{name}</span></p>
				<p>Age: <span className="data">{age}</span></p>
				<p>Is a developer: <span className="data">{isDeveloper ? 'yes' : 'no'}</span></p>
				<p>Scores: <span className="data">{scores.join(', ')}</span></p>
				<p>Groups: <span className="data">{groups.join(', ')}</span></p>
				<p>Company: <span className="data">{companyMessage}</span></p>
				<MoreInfo status={"finished"} approved={true} numberOfErrors={3} />
			</header>
		</div>
	);
}

export default App;
