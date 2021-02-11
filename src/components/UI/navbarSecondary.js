import React, { useContext } from 'react';
import '../CSS/navbarSecondary.css'

import { ShowMenuContext, DimBGContext, TranslatedContext } from './NavFunctionality';
import { Button, ButtonGroup } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const NavbarSecondary = () => {
	// Functions for dimming the background when the side menu is open
	const dimmedState = useContext(DimBGContext)
	const dimBg = {
		backgroundColor: dimmedState.background.backgroundColor,
		display: dimmedState.background.display
	}
	const dimTheBackground = () => {
		dimmedState.dimTheBackground(
			dimmedState.background.backgroundColor
			)
	}
	// Material UI functions for changing styles
	const theme = createMuiTheme({
		palette: {
			  primary: {
				main: "#323232"
			}
		}
	});

	//Function for moving around the side menu
	const menuTranslatedInXAxis = useContext(TranslatedContext)
	const moveTheMenu = {
		transform: menuTranslatedInXAxis.navMenu.transform
	}
	const navigate = () => {
		menuTranslatedInXAxis.translateX(
			menuTranslatedInXAxis.navMenu.transform
		)
	}
	const navigateOff = () => { 
		menuTranslatedInXAxis.translateX(
			menuTranslatedInXAxis.navMenu.transformOff
		)
	}

	// Group function for side menu

	const hideMenuTrigger = () => {
		dimTheBackground();
		navigateOff()
	}
	const logg = e => {
		console.log( e.target)
	}
	return (
		<ThemeProvider theme={theme}>
			<div className="navbar-secondary" style={ dimBg }>
				<div className="navbar-secondary-menu">
					<div className="navbar-secondary-slider" style={moveTheMenu}>
						<div className="navbar-secondary-part1" >
							<div className="navbar-secondary-user">
								<p onClick={ hideMenuTrigger } className="navbar-secondary-close-btn">X</p>
								<h3>Hello, User!</h3>
								<AccountCircleIcon></AccountCircleIcon>
							</div>
							<ButtonGroup color="primary" orientation="vertical" fullWidth={true} variant="text">
								<Button className="navbar-secondary-bestsellers">Best Sellers</Button>
								<Button className="navbar-secondary-account">User Account</Button>
								<Button className="navbar-secondary-orders">Your Orders</Button>
							</ButtonGroup>
							<h4>Shop By Department</h4>
							
								<ButtonGroup color="primary" orientation="vertical" fullWidth={true} variant="text">	
									<Button onClick={ navigate }>
										<i className="fas fa-arrow-left"></i>
										Electronics
									</Button>
									<Button onClick={ navigate }>
										<i className="fas fa-arrow-left"></i>
										Garden
									</Button>
									<Button onClick={ navigate }>
										<i className="fas fa-arrow-left"></i>
										Toys
									</Button>
									<Button onClick={ logg } defaultValue="clothes" >
										<i className="fas fa-arrow-left"></i>
										Clothes
									</Button>
								</ButtonGroup>
							
						</div>
						<div className="navbar-secondary-part2">
							<div className="navbar-secondary-user">
								<p onClick={ hideMenuTrigger } className="navbar-secondary-close-btn">X</p>
								<h3>Hello, User!</h3>
								<AccountCircleIcon></AccountCircleIcon>
							</div>
							<h5 onClick={navigate}>Back to main menu <i className="fas fa-arrow-right"></i></h5>
							<h4>Shop By Department</h4>
							<div className="navbar-secondary-electronics">
								<ButtonGroup color="primary" orientation="vertical" fullWidth={true} variant="text">
									<Button>Desktop Pc</Button>
									<Button>Consoles</Button>
									<Button>TV</Button>
								</ButtonGroup>
							</div>
							<div className="navbar-secondary-garden">
								<ButtonGroup color="primary" orientation="vertical" fullWidth={true} variant="text">
									<Button>Garden Tools</Button>
									<Button>Seeds</Button>
									<Button>Lawn Mowers</Button>
								</ButtonGroup>
							</div>
							<div className="navbar-secondary-toys">
								<ButtonGroup color="primary" orientation="vertical" fullWidth={true} variant="text">
									<Button>Dolls</Button>
									<Button>Toy Cars</Button>
									<Button>Puzzles</Button>
								</ButtonGroup>
							</div>
							<div className="navbar-secondary-clothes">
								<ButtonGroup color="primary" orientation="vertical" fullWidth={true} variant="text">
									<Button>T-shirts</Button>
									<Button>Jeans</Button>
									<Button>Socks</Button>
								</ButtonGroup>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default NavbarSecondary;