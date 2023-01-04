export default function Card(props) {
	return (
		<div className='wrapper'>
			<div className='wrapper--img'>
				<img
					src={require(`../images/${props.item.images.png}`)}
					className='card--img'
					alt='planet'
				/>
			</div>

			<div className='wrapper--description'>
				<h2>{props.item.name}</h2>
				<p className='wrapper-paragraph'>{props.item.description}</p>

				<div className='time-estimate'>
					<div className='mini-estimate'>
						<p>Avg. distance </p>
						<p className='paragraph-dec'>{props.item.distance}</p>
					</div>

					<div className='mini-estimate'>
						<p>Est. travel time </p>
						<p className='paragraph-dec'>{props.item.travel}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
