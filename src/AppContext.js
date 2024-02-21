import { useState, createContext } from "react";
import HomePage from "./pages/homepage/HomePage";

var contextObject = {
    pageChanger: () => { },
    pageClick: () => { },
    pageClicked: 1
};
var AppContext = createContext(contextObject);
export default AppContext;
