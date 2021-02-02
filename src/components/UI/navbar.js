import { React, useContext }from 'react';
import '../CSS/navbar.css';
import { ShowMenuContext } from './ShowMenuProvider'




const Navbar = (props) => {
	const state = useContext(ShowMenuContext)
	return (
		<div className="navbar">
			<button className="navbar-home">AMAZON</button>
			<button className="navbar-address">Choose Your Address</button>
			<div className="search-box-container">
				<select name="products">
					<option value="electronics">Electronics</option>
					<option value="garden">Garden</option>
					<option value="toys">Toys</option>
					<option value="clothes">Clothes</option>
				</select>
				<input type="text"></input>
				<button type="submit" className="navbar-search" value=" ">
					<i className="fas fa-search"></i>
				</button>
			</div>
			<button className="navbar-signIn">Sign In</button>
			<button className="navbar-returnsAndOrders">Returns and orders</button>
			<button className="navbar-prime">Your Prime</button>
			<button className="navbar-cart">
				<i className="fas fa-shopping-basket"></i>
				<p className="cart-count">0</p>
			</button>
			<i className="fas fa-bars" onClick={() => {
				state.showMenu(
					state.sideMenu.transform
				)
			}}></i>
		</div>
	)
}

export default Navbar;