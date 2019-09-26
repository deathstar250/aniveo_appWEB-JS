import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routing from './routers/index';


ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
