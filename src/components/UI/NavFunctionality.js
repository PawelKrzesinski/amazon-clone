import React, { useState } from 'react';

//dim the background when menu is open
export const DimBGContext = React.createContext({
    background: {
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		display: "none"
	},
	dimTheBackground: () => {}
})

export const DimBGContextProvider = props => {
    const background = {
        dimmed: {
			backgroundColor: "rgba(0, 0, 0, 0.6)",
			display: "flex"
        },
        notDimmed: {
            backgroundColor: "rgba(0, 0, 0, 0)",
			display: "none"
        }
    }

    const dimTheBackground = (backgroundColor, display) => {
        setState({
			...state, 
			background: backgroundColor === 'rgba(0, 0, 0, 0)' &&  display === 'none'? 
			background.dimmed : 
			background.notDimmed
    	})
	}
    const initState = {
        background: background.notDimmed,
		display: background.notDimmed,
        dimTheBackground: dimTheBackground
    }

    const [state, setState] = useState(initState);

    return (
        <DimBGContext.Provider value={state}>
            {props.children}
        </DimBGContext.Provider>
    )
}

//navigate to selected category
export const TranslatedContext = React.createContext({
    navMenu: {
		transform: "translateX(100%)",
		transformOff: "translateX(0%)"
	},
	translateX: () => {}
})

export const TranslateXContextProvider = props => {
    const navMenu = {
        shown: {
            transform: 'translateX(0%)'
        },
        hidden: {
            transform: 'translateX(100%)'
        }
    }


    const translateX = transform => {
        setState({...state, navMenu: transform === 'translateX(100%)' 
        ? navMenu.shown 
        : navMenu.hidden})
    }

    const initState = {
        navMenu: navMenu.hidden,
        translateX: translateX
    }

    const [state, setState] = useState(initState);

    return (
        <TranslatedContext.Provider value={state}>
            {props.children}
        </TranslatedContext.Provider>
    )
}


// Return state to initial function

// const initialState = () => {
// 	setState({
// 		...state,

// 	})
// }