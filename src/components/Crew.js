export default function Crew(props) {
	return (
		<div className='crew--container wrapper'>
			<div className='wrapper--img'>
				<img
					src={require(`../images/${props.item.images.png}`)}
					className='crew-img'
					alt='space-crew'
				/>
			</div>

			<div className='crew-desc--wrapper'>
				<h2 className='crew-tag'>{props.item.role}</h2>
				<h3 className='crew-name'> {props.item.name}</h3>
				<p className='crew-description'>{props.item.bio}</p>
			</div>
		</div>
	);
}
