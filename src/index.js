import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
firebase.initializeApp({
    apiKey: 'AIzaSyAJ6vBKpLbGLarGBISp5_jW67V2hMEo1Z0',
    authDomain: 'reattr-dac0a.firebaseapp.com',
    databaseURL: 'https://reattr-dac0a.firebaseio.com',
    projectId: 'reattr-dac0a',
    storageBucket: 'reattr-dac0a.appspot.com',
    messagingSenderId: '67713288272'
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
