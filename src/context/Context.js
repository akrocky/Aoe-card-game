import React, { createContext, useContext, useReducer } from 'react';
import cardReducer from './Reducer';
const Card = createContext()

const Context = ({ children }) => {
           
   

   

    const [state, dispatch] = useReducer(cardReducer, {
        playerCards: [],
        cardDeatails: { }
    });
    

    return (
        <Card.Provider value={{ state, dispatch }}>
            {children}
        </Card.Provider>
    );
};

export default Context;

export const useAllInfo = () => {
    return useContext(Card)
};



