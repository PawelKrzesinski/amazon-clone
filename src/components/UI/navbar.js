import { React, useContext, useState }from 'react';
import '../CSS/Navbar.css';
import { 
	Button, 
	ButtonGroup, 
	Drawer, 
	List } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { 
	BrowserRouter as Router, 
	Route, 
	Switch, 
	Link } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import DrawerMenu from './DrawerMenu'

const categories = [
	{
		"name": "Electronics",
		"subCat": ["Desktop PC","Consoles","TV"]
	},
	{
		"name": "Garden",
		"subCat": ["Garden Tools","Seeds","Lawn Mowers"]
	},
	{
		"name": "Toys",
		"subCat": ["Lego","Toy Cars","Puzzles"]
	},
	{
		"name": "Clothes",
		"subCat": ["T-Shirts","Jeans","Socks"]
	}			
]
const Navbar = () => {
	const theme = createMuiTheme({
		palette: {
			  textPrimary: {
				main: "#e6e6e6"
			}
		}
	});
	
	const textColor = theme.palette.textPrimary.main;
	
	//Open drawer menu functions
	const initState = {isOpen: false}
	const [state, setState] = useState(initState)
	const toggleDrawer = () => {
		setState({isOpen: !state.isOpen})
	}
	
	return (
		<Router>
		<ThemeProvider theme={theme}>
			<div className="navbar">
				<List>	
					<Link 
					style={{color: textColor}}
					
					 to="/" className="navbar-home">AMASOON</Link>	
					<Link 
					style={{color: textColor}}
					 to="" className="navbar-address">Choose Your Address</Link>
					<Link 
					style={{color: textColor}}
					 to="" className="navbar-returnsAndOrders">Returns and orders</Link>
					<Link 
					style={{color: textColor}}
					 to="" className="navbar-prime">Your Prime</Link>
				</List>
				<div className="search-box-container">
					<select name="products">
						<option value="All Departments">All Departments</option>
						{
							categories.map(category => {
								return (
									<option value={ category.name } key={ uuid() }>{ category.name }</option>
								)
							})
						}
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
				<i className="fas fa-bars" onClick={toggleDrawer}></i>
			</div>
			<DrawerMenu
			toggle={ toggleDrawer }
			state={state}
			setState={setState} />
		</ThemeProvider>
	</Router>
	)
}

export default Navbar;