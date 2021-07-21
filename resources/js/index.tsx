import React from 'react';
import { render } from "react-dom";
import App from './components/App';
import { store } from './store/store';
import { Provider } from 'react-redux';
render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
    , document.getElementById("app")
);