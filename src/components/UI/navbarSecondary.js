import react from 'react';
import '../CSS/navbarSecondary.css'

const NavbarSecondary = () => {
	return (
		<div className="navbar-secondary">
			<button className="navbar-secondary-bestsellers">Best Sellers</button>
			<button className="navbar-secondary-electronics">Electronics</button>
			<button className="navbar-secondary-garden">Garden</button>
			<button className="navbar-secondary-toys">Toys</button>
			<button className="navbar-secondary-clothes">Clothes</button>
		</div>
	)
}

export default NavbarSecondary;