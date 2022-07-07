import React from 'react';
import FunctionalComponent from './Functional/FunctionalComponent';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/store";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom'
import ClassBasedComponent from "./ClassBased/ClassBasedComponent";

ReactDOM.render(
    <Provider store={store}>
        <FunctionalComponent/>
        <ClassBasedComponent/>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
