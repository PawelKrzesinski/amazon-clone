import { List } from '@material-ui/core';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



export default function DrawerMenuUser(props){
	const toggleOff = () =>{
		props.toggle()
		props.translate()
	}
	return(
		<div style={{width: "100%"}} className="drawer-menu-user-box">
			<div className="drawer-menu-user-account">
				<p onClick={ toggleOff } className="drawer-menu-close-btn">X</p>
				<h3>Hello, User!</h3>
				<AccountCircleIcon></AccountCircleIcon>
			</div>
			<List>
				<Link to="/useraccount">User Account</Link>
				<Link to="/orders">Your Orders</Link>
			</List>
		</div>
	)
}