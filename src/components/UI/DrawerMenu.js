import { React, useContext, useState }from 'react';
import { TranslatedContext } from './NavFunctionality';
import { Drawer, List } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { 
	BrowserRouter as Router, 
	Route, 
	Switch, 
	Link } from "react-router-dom";
import {v4 as uuid} from 'uuid';

import '../CSS/DrawerMenu.css'

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



export default function DrawerMenu(props){
	const theme = createMuiTheme({
		palette: {
			  textPrimary: {
				main: "#e6e6e6"
			}
		}
	});

	const textColor = theme.palette.textPrimary.main;
	
	const useStyles = makeStyles((theme) => ({
		drawerPaper: { width: "inherit"}
	}))
	const classes = useStyles();

	//Navigate through drawer menu functions
	const menuTranslatedInXAxis = useContext(TranslatedContext)

	const navigate = (e) => {
		translate();
		changeCategory(e);
	}

	const moveTheMenu = {
		transform: menuTranslatedInXAxis.navMenu.transform
	};
	const translate = () => {
		menuTranslatedInXAxis.translateX(
			menuTranslatedInXAxis.navMenu.transform
		)
	};

	const changeCategory = (e) => {
		categories.forEach(category => {
			if(e.currentTarget.value === category.name){
				props.setState({
					...props.state, category: e.currentTarget.value,
					subCat: category.subCat
				})
			}
		})
	}

	return(
		<div>
			<Drawer
				anchor="right"
				open={props.state.isOpen}
				variant="temporary"
				classes={{ paper: classes.drawerPaper}}
			>
				<div className="drawer-menu-slider" style={moveTheMenu}>
					<div className="drawer-menu-part-1" >
						<div className="drawer-menu-user-account">
							<p onClick={ props.toggle } className="drawer-menu-close-btn">X</p>
							<h5>Hello, User!</h5>
							<AccountCircleIcon ></AccountCircleIcon>
						</div>
						<List>
							
							<Link>User Account</Link>
							<Link>Your Orders</Link>
						</List>
						<h4>Shop By Department</h4>
						<List>
							<Link>Best Sellers</Link>
							{categories.map(category => {	
								return(
									<Link 
									onClick={ navigate } 
									key={ uuid() } 
									value={ category.name }>
									<i className="fas fa-arrow-left"></i>
									{ category.name }
									</Link>
								)
							})}		
						</List>
						</div>
						<div className="drawer-menu-part-2">
							<div className="drawer-menu-user-account">
								<p onClick={ props.toggle } className="drawer-menu-close-btn">X</p>
								<h3>Hello, User!</h3>
								<AccountCircleIcon></AccountCircleIcon>
							</div>
							<h5 onClick={ navigate }>Back to main menu <i className="fas fa-arrow-right"></i></h5>
							<h4>Shop By Department</h4>
							<List>
								{props.state.subCat ? props.state.subCat.map(cat => {
									return(<Link	key={ uuid() }>{ cat }</Link>)
									}) : ""
								}
							</List>
						</div>
				</div>		
			</Drawer>
		</div>
	)
}

