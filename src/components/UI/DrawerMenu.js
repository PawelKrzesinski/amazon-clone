import { React, useContext, useState }from 'react';
import { TranslatedContext } from './NavFunctionality';
import { Drawer, List } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

import { 
	BrowserRouter as Router, 
	Route, 
	Switch, 
	Link } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import DrawerMenuUser from './DrawerMenuUser'
import BackToMainMenu from './BackToMainMenu'


import '../CSS/DrawerMenu.css'

const categories = [
	{
		"name": "Electronics",
		"subCat": ["Desktop PC","Consoles","TV"]
	},
	{
		"name": "Garden",
		"subCat": ["Garden Tools","Barbecues","Lawn Mowers"]
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
			if(e.currentTarget.name === category.name){
				props.setState({
					...props.state, category: e.currentTarget.name,
					subCat: category.subCat
				})
			}
		})
	}
	const navigate = (e) => {
		translate();
		changeCategory(e);
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
						<DrawerMenuUser 
							toggle={props.toggleDrawer} 
							translate={translate}
						/>
						<h4>Shop By Department</h4>
						<List>
							<Link to="/bestsellers">Best Sellers</Link>
							{categories.map(category => {	
								return(
									<Link 
									to={`/${category.name}`}
									onClick={ navigate } 
									key={ uuid() } 
									name={ category.name }>
									<i className="fas fa-arrow-left"></i>
									{ category.name }
									</Link>
								)
							})}		
						</List>
						</div>
						<div className="drawer-menu-part-2">
							<DrawerMenuUser 
								toggle={props.toggleDrawer} 
								translate={translate}
							/>
							<h3>{props.state ? props.state.category : " "}</h3>
							<List>
								{props.state.subCat ? props.state.subCat.map(cat => {
									console.log(cat)
									return(<Link
										to={`/${cat}`}	
										key={ uuid() }
										>{ cat }
										</Link>)
									}) : ""
								}
							</List>
							<BackToMainMenu navigate={navigate} />
						</div>
				</div>		
			</Drawer>
		</div>
	)
}

