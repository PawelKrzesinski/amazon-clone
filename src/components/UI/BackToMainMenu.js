import React from 'react'



export default function BackToMainMenu(props){
	return(
		<h5 onClick={ props.navigate } className="back-to-main">Back to main menu <i className="fas fa-arrow-right"></i></h5>
	)
}