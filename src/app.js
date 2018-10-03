import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Hello/>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}