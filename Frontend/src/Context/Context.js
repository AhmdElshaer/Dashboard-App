import React from "react";
import { getAuthToken } from "../util/auth";

const ThemeContext = React.createContext(false);

const  ThemeProvider  =  ({ children })  =>  {
  const dMode = localStorage.getItem('DarkMode') === "true" ? true : false;
  const  [toggle, setToggle]  =  React.useState(dMode);

  const toggleFunction =  ()  =>  {
    setToggle(!toggle);
    localStorage.setItem('DarkMode', !dMode);
  };

  const token = getAuthToken();

  return  (
    <ThemeContext.Provider value={{ toggle, toggleFunction, token }}>
        {children}
    </ThemeContext.Provider>
    );
};
export  {  ThemeContext,  ThemeProvider  };