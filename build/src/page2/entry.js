import "bootstrap/dist/css/bootstrap.css";
import "../../stylesheets/style.less";

import HelloWorld from "../components/Hello.jsx"; // eslint-disable-line no-unused-vars
import React from "react"; // eslint-disable-line no-unused-vars
import ReactDOM from "react-dom"; // eslint-disable-line no-unused-vars

ReactDOM.render(<HelloWorld phrase="Page 2"/>,document.querySelector("#content"));
