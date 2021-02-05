import React, { useContext } from 'react';
import '../CSS/navbarSecondary.css'
import { ShowMenuContext } from './ShowMenuProvider'
import { Button, ButtonGroup } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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

	const theme = createMuiTheme({
		palette: {
			  primary: {
				main: "#323232"
			}
		}
	});
	

	return (
		<ThemeProvider theme={theme}>
			<div className="navbar-secondary">
				<div className="navbar-secondary-part1" style={showMenu}>
					<div className="navbar-secondary-user">
						<p onClick={menuShow}>X</p>
						<h3>Hello, User!</h3>
						<AccountCircleIcon></AccountCircleIcon>
					</div>
					<Button color="primary" fullWidth={true} variant="text" className="navbar-secondary-bestsellers">Best Sellers</Button>
					<h4>Shop By Department</h4>
					<ButtonGroup color="primary" orientation="vertical" fullWidth={true} variant="text">	
						<Button>
							<i className="fas fa-arrow-left"></i>
							Electronics
						</Button>
						<Button>
							<i className="fas fa-arrow-left"></i>
							Garden
						</Button>
						<Button>
							<i className="fas fa-arrow-left"></i>
							Toys
						</Button>
						<Button>
							<i className="fas fa-arrow-left"></i>
							Clothes
						</Button>
					</ButtonGroup>
				
				</div>
				<div className="navbar-secondary-part2">
					<h5>Back to main menu <i className="fas fa-arrow-right"></i></h5>
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
		</ThemeProvider>
	)
}

export default NavbarSecondary;