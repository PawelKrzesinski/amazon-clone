import react from 'react';
import '../CSS/navbar.css';


const Navbar = () => {
	return (
		<div className="navbar">
			<button className="navbar-home">AMAZON</button>
			<div className="search-box-container">
				<select name="products">
					<option value="electronics">Electronics</option>
					<option value="garden">Garden</option>
					<option value="toys">Toys</option>
					<option value="clothes">Clothes</option>
				</select>
				<input type="text"></input>
				<div className="search-button-container">
					<input type="submit" className="navbar-search" value=" "></input>
					<i class="fas fa-search"></i>
				</div>
			</div>
			<button className="navbar-signIn">Sign In</button>
			<button className="navbar-returnsAndOrders">Returns and orders</button>
			<button className="navbar-prime">Your Prime</button>
			<button className="navbar-cart"><i class="fas fa-shopping-basket"></i></button>
			<i class="fas fa-bars"></i>
		</div>
	)
}

export default Navbar;