import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Router from "./routes";
import App from "./App";
ReactDOM.render(<Router />, document.getElementById('root'));
// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById("root")
// );
