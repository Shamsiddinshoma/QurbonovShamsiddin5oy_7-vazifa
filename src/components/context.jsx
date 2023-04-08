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

  // const [inc, setInc] = useState(0)
  // const increment = (inc) => {
  //   setInc(inc + 1)
  // } 

  // const decrement = (inc) => {
  //   setInc(inc - 1)
  // }



    // const removeItem = (id) => {
    //     const newItem = post.filter((item) => item.id !== id);
    //     setPost(newItem);
    // }

    return (
        <AppContext.Provider value={{increment,...state,removeItem,clearCart}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvaider}