import React, { Component, useContext, useState } from 'react';
import '../CSS/navbarSecondary.css'

import { DimBGContext, TranslatedContext } from './NavFunctionality';
import { Button, ButtonGroup } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {v4 as uuid} from 'uuid';

const NavbarSecondary = () => {

	// Spróbowac: Dodac ID do categories, do state'u dodawac ID kategorii i po ID kategorii dopasowywać podkategorie i potem je wyświetlać


	const [state, setState] = useState()
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

	// Functions for dimming the background when the side menu is open
	const dimmedState = useContext(DimBGContext);
	const dimBg = {
		backgroundColor: dimmedState.background.backgroundColor,
		display: dimmedState.background.display
	};
	const dimTheBackground = () => {
		dimmedState.dimTheBackground(
			dimmedState.background.backgroundColor
			)
	};
	// Material UI functions for changing styles
	const theme = createMuiTheme({
		palette: {
			  primary: {
				main: "#323232"
			}
		}
	});

	//Function for moving around the side menu
	const menuTranslatedInXAxis = useContext(TranslatedContext);
	const moveTheMenu = {
		transform: menuTranslatedInXAxis.navMenu.transform
	};
	const translate = () => {
		menuTranslatedInXAxis.translateX(
			menuTranslatedInXAxis.navMenu.transform
		)
	};
	const navigateOff = () => { 
		menuTranslatedInXAxis.translateX(
			menuTranslatedInXAxis.navMenu.transformOff
		)
	};

	// Group function for side menu
	const hideMenuTrigger = () => {
		dimTheBackground();
		navigateOff();
	};
	const stopProp = e =>{
		e.stopPropagation();
	};

	// const initState = {
	

	
	const changeCategory = e => {
		categories.forEach(category => {
			if(e.currentTarget.value === category.name){
				setState({
					...state, category: e.currentTarget.value,
					subCategories: category.subCat
				})
			}
		})
	}
	
	const navigate = (e) => {
		translate();
		changeCategory(e);
	}
	let subCategories = [];
	return (
		
		<ThemeProvider theme={theme}>
			<div className="navbar-secondary" style={ dimBg } onClick={ hideMenuTrigger }>
				<div className="navbar-secondary-menu" onClick={stopProp}>
					<div className="navbar-secondary-slider" style={ moveTheMenu }>
						<div className="navbar-secondary-part1" >
							<div className="navbar-secondary-user">
								<p onClick={ hideMenuTrigger } className="navbar-secondary-close-btn">X</p>
								<h3>Hello, User!</h3>
								<AccountCircleIcon ></AccountCircleIcon>
							</div>
							<ButtonGroup color="primary" orientation="vertical" fullWidth={true} variant="text">
								<Button className="navbar-secondary-bestsellers">Best Sellers</Button>
								<Button>User Account</Button>
								<Button>Your Orders</Button>
							</ButtonGroup>
							<h4>Shop By Department</h4>
							<ButtonGroup 
								color="primary" 
								orientation="vertical" 
								fullWidth={ true } 
								variant="text">
									
									{categories.map(category => {				
									return(
										<Button 
										onClick={ navigate } 
										key={ uuid() } 
										value={ category.name }>
										<i className="fas fa-arrow-left"></i>
										{ category.name }
										</Button>
									)
									})}
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

								<ButtonGroup 
								color="primary"
								orientation="vertical" 
								fullWidth={true} 
								variant="text">
								{(state)=> {
									subCategories = state.subCategories;
									console.log(subCategories);
								} 

								}	
								
								{/* // (category => {
								// 		return(
								// 			<Button 
								// 			key={ uuid() } 
								// 			value={ category }>
								// 			{ category }
								// 		</Button>
								// 		)
								// 	}) */}
								
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