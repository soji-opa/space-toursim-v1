import europa from '../images/image-europa.png';
import data from '../data.json';

export default function Card(props) {
	return (
		<div className='wrapper'>
			<img
				src={require(`../images/${props.item.images.png}`)}
				className='card--img'
				alt='planet'
			/>

			<div className='wrapper--description'>
				<h2>{props.item.name}</h2>

				<p>{props.item.description}</p>

				<p>Avg. distance - {props.item.distance}</p>

				<p>Est. travel time - {props.item.travel}</p>
			</div>
		</div>
	);
}
