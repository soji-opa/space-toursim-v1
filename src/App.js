import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data.json';
import Crew from './components/Crew';

// console.log(data);
// console.log(data.destinations);

const destinations = data.destinations;
const crew = data.crew;

const cardEl = destinations.map((destination) => {
	return <Card key={destination.name} item={destination} />;
});

const crewEl = crew.map((item) => {
	return <Crew key={item.name} item={item} />;
});

function App() {
	return (
		<div className='App'>
			<Navbar />
			<section className='destination'>
				<h2 className='section--header'>Destinations</h2>
				{cardEl}
			</section>
			<section className='crew'>
				<h2 className='section--header'> Meet your crew </h2>
				{crewEl}
			</section>
		</div>
	);
}

export default App;
