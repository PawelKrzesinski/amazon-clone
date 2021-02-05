import { React, useContext }from 'react';
import '../CSS/navbar.css';
import { ShowMenuContext } from './ShowMenuProvider';
import { Button, ButtonGroup } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
	palette: {
	  	primary: {
			main: "#e6e6e6"
		}
	}
});
  
const Navbar = (props) => {
	const state = useContext(ShowMenuContext)
	const menuShow = () => {
		state.showMenu(
			state.sideMenu.transform
		)
	};
	return (
		<ThemeProvider theme={theme}>
		<div className="navbar">
			<ButtonGroup color="primary">
				<Button className="navbar-home" variant="outlined" href="../public/index.html">AMAZON</Button>
				<Button className="navbar-address">Choose Your Address</Button>
				<Button className="navbar-returnsAndOrders">Returns and orders</Button>
				<Button className="navbar-prime">Your Prime</Button>
			</ButtonGroup>
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
			<button className="navbar-cart">
				<i className="fas fa-shopping-basket"></i>
				<p className="cart-count">0</p>
			</button>
			<Button className="navbar-signIn">Sign In</Button>
			<i className="fas fa-bars" onClick={menuShow}></i>
		</div>
		</ThemeProvider>
	)
}

export default Navbar;