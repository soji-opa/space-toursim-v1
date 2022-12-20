import logo from '../images/logo-icon.png';

export default function Navbar(props) {
	return (
		<nav>
			<img src={logo} alt='header--image' className='logo--img' />
			<h1 className='header--text'>Space Tourism</h1>
		</nav>
	);
}
