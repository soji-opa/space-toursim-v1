import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data.json';

console.log(data);
console.log(data.destinations);

const destinations = data.destinations;

// const cardEl = Object.entries(data);
// console.log(cardEl);

// const card = cardEl.map((item) => (
// 	<li key={item.names}>{item.destinations[0]}</li>
// ));
// console.log(card);

const cardEl = destinations.map((destination) => {
	return <Card key={destination.name} item={destination} />;
});

// console.log(card);
function App() {
	// const dataEl = data.map((item) => (
	// 	<Card key={item.name} description={item} />
	// ));

	return (
		<div className='App'>
			<Navbar />
			<section className='destination'>
				<h2>Destinations</h2>
				{cardEl}
			</section>
		</div>
	);
}

export default App;
