import React, { useState } from 'react';

//navigate to selected category
export const TranslatedContext = React.createContext({
    navMenu: {
		transform: "translateX(0%)"
	},
	translateX: () => {}
})

export const TranslateXContextProvider = props => {
    const navMenu = {
        notTransformed: {
            transform: 'translateX(0%)'
        },
        transformed: {
            transform: 'translateX(100%)'
        }
    }


    const translateX = transform => {
        setState({...state, navMenu: transform === 'translateX(100%)' 
        ? navMenu.notTransformed 
        : navMenu.transformed})
    }

    const initState = {
        navMenu: navMenu.notTransformed,
        translateX: translateX
    }

    const [state, setState] = useState(initState);

    return (
        <TranslatedContext.Provider value={state}>
            {props.children}
        </TranslatedContext.Provider>
    )
}


