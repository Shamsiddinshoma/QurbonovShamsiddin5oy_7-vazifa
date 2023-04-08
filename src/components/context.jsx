import { createContext, useState,useEffect,useContext,useReducer } from "react";
import data from "./data";
import reducer from "./reducer";
const AppContext = createContext();

const initialState = {
  cart: data,
  total: 0,
  amount: 0,
}

const AppProvaider = ({children}) => {

  const [state,dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    dispatch({type: 'REMOVE', payload: id})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  const increment = (id) => {
    dispatch({type: 'INC', payload: id})
  }
  const decrement = (id) => {
    dispatch({type: 'DEC', payload: id})
  }

  // useEffect(() => {
  //   dispatch({type: 'GET_TOTALS'})
  // }, [state.cart])

    return (
        <AppContext.Provider value={{increment,...state,removeItem,clearCart,decrement}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvaider}