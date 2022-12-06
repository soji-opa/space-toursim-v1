import europa from '../images/image-europa.png';

export default function Card() {
	return (
		<div>
			<img src={europa} className='card-img' alt='planet' />

			<h2>Europa</h2>

			<p>
				The smallest of the four Galilean moons orbiting Jupiter, Europa is a
				winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
				skating, curling, hockey, or simple relaxation in your snug wintery
				cabin.
			</p>

			<p>Avg. distance</p>

			<p>628 mil. km</p>

			<p>Est. travel time</p>

			<p>3 years</p>
		</div>
	);
}
