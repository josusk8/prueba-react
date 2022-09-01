import React from "react"


export interface ITUserContext {
    isAuth: boolean;
   
  }
  const defaultState = {
    isAuth: false,
  };
  
  const UserContext = React.createContext<ITUserContext>(defaultState);

  export default UserContext