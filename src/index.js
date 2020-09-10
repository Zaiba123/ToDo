import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from "recoil";


ReactDOM.render(
 
  <RecoilRoot>
    <React.StrictMode>
    <App />
    </React.StrictMode>
    </RecoilRoot>,
  document.getElementById('root')
);
serviceWorker.unregister();
