import React, { useState, useReducer } from 'react';

const initialState = {
  outlet: {},
  showSideBar: false,

}

export const Context = React.createContext();

const reducer = (state, action) => {
  if (action.type === 'SHOWSIDEBAR') {
    return {
      ...state,
      showSideBar: action.showSideBar
    }
  }
  else if (action.type === 'OUTLET') {
    return {
      ...state,
      outlet: action.outlet
    }
  }


  return state
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export default Store