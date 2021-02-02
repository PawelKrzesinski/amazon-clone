import React, { useState } from 'react';


export const ShowMenuContext = React.createContext({
    sideMenu: {
		isShown: false,
		transform: "translateX(500%)"
	},
	showMenu: () => {}
})

export const ShowMenuContextProvider = props => {
    const sideMenu = {
        shown: {
            transform: 'translateX(0%)'
        },
        hidden: {
            transform: 'translateX(500%)'
        }
    }


    const showMenu = transform => {
        setState({...state, sideMenu: transform === 'translateX(0%)' 
        ? sideMenu.hidden 
        : sideMenu.shown})
    }

    const initState = {
        sideMenu: sideMenu.hidden,
        showMenu: showMenu
    }

    const [state, setState] = useState(initState);

    return (
        <ShowMenuContext.Provider value={state}>
            {props.children}
        </ShowMenuContext.Provider>
    )
}