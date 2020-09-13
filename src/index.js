import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from "recoil";
import { Container } from '@material-ui/core';


const HelloWorldDecorator = (props) => <div>
  <p>
    Hello {props.children}, what's up?
  </p>
</div>


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Container>
        <App />
      </Container>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();