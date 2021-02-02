import React, { useContext } from 'react';
import '../CSS/navbarSecondary.css'
import { ShowMenuContext } from './ShowMenuProvider'

const NavbarSecondary = () => {
	const state = useContext(ShowMenuContext)
	const showMenu = {
		transform: state.sideMenu.transform
	};
	const menuShow = () => {
		state.showMenu(
			state.sideMenu.transform
		)
	};

	const categoriesSpecified = [
		["Desktop Pc", "Consoles", "TV"],
		["Garden Tools", "Seeds", "Lawn Mowers"],
		["Dolls", "Toy Cars", "Puzzles"],
		["T-shirts", "Jeans", "Socks"]
	]

	const renderButtons = () => {
		
	}
	return (
		<div>
			<div className="navbar-secondary" style={showMenu}>
				<button className="navbar-secondary-bestsellers"><i className="fas fa-arrow-left"></i>Best Sellers</button>
				<button className="navbar-secondary-electronics"><i className="fas fa-arrow-left"></i>Electronics</button>
				<button className="navbar-secondary-garden"><i className="fas fa-arrow-left"></i>Garden</button>
				<button className="navbar-secondary-toys"><i className="fas fa-arrow-left"></i>Toys</button>
				<button className="navbar-secondary-clothes"><i className="fas fa-arrow-left"></i>Clothes</button>
			<p onClick={menuShow}>X</p>
			</div>
			<div className="navbar-secondary-part2">
				{categoriesSpecified[0].forEach(element => {
					return (
						<button>{element}</button>
					)	
				})}
			</div>
		</div>
		
	)
}

export default NavbarSecondary;