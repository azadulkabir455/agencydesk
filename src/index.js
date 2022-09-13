import React from "react";
import  ReactDOM  from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import {GlobalDataContainer} from "./ContextAPI/ContextAPI";
import {BrowserRouter as Router} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <GlobalDataContainer>
            <Router>
                <App />
            </Router>
        </GlobalDataContainer>
    </React.StrictMode>
);