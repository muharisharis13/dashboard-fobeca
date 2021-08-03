import React, { useState, useReducer } from 'react';
import { MiddleWare_API_WareHouse } from './Middleware/Middleware';
import { Middleware_API_omney } from './Middleware/omney';

const initialState = {
  outlet: {},
  showSideBar: false,
  passing: [],
  loading: false,
  loadingButton: false,
  loadingModal: false,
  datacourier: [],
  datacourierTemp: [],
  datapurchasing: [],
  datapurchasingTemp: [],
  datacart: [],
  dataModal: [],
  photo: null,
  identity: null

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
  else if (action.type === 'PASSING') {
    return {
      ...state,
      passing: action.passing
    }
  }
  else if (action.type === 'LOADING') {
    return {
      ...state,
      loading: action.loading
    }
  }
  else if (action.type === 'LOADING_BTN') {
    return {
      ...state,
      loadingButton: action.loadingButton
    }
  }
  else if (action.type === 'LOADING_MODAL') {
    return {
      ...state,
      loadingModal: action.loadingModal
    }
  }
  else if (action.type === 'SET_COURIER') {
    return {
      ...state,
      datacourier: action.datacourier,
      datacourierTemp: action.datacourierTemp
    }
  }
  else if (action.type === 'SET_CART') {
    return {
      ...state,
      datacart: action.datacart
    }
  }
  else if (action.type === 'SET_PURCHASING') {
    return {
      ...state,
      datapurchasing: action.datapurchasing,
      datapurchasingTemp: action.datapurchasingTemp,
    }
  }
  else if (action.type === 'SET_MODAL') {
    return {
      ...state,
      dataModal: action.dataModal
    }
  }
  else if (action.type === 'IDENTITY') {
    return {
      ...state,
      identity: action.identity
    }
  }
  else if (action.type === 'PHOTO') {
    return {
      ...state,
      photo: action.photo
    }
  }


  return state
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const apiwarehouse = MiddleWare_API_WareHouse(dispatch)

  const apiomney = Middleware_API_omney(dispatch)


  return (
    <Context.Provider value={{ ...state, dispatch, apiwarehouse, apiomney }}>
      {children}
    </Context.Provider>
  )
}

export default Store