import logo from '../images/logo-icon.png';

export default function Navbar() {
	return (
		<nav>
			<img src={logo} alt='header--image' className='logo--img' />
			<h1 className='header--text'>Destination Props</h1>
		</nav>
	);
}
