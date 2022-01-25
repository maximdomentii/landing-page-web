import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import {StoreProvider} from "./store/store";
import {initialState, reducer} from "./store/reducer";

ReactDOM.render(
    <StoreProvider initialState={initialState} reducer={reducer}>
        <App/>
    </StoreProvider>,
    document.getElementById('root')
);
