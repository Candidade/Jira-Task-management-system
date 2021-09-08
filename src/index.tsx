import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './index.less';
import App from './App';
import { DevTools, loadServer } from 'jira-dev-tool';
//务必在jira-dev-tool后引入,因为jira-dev-tool内部实现也使用的antd
import 'antd/dist/antd.less';
import reportWebVitals from './reportWebVitals';
import { AppProviders } from './context';

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
