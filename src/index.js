import store from 'app/store';
import { DataProvider } from 'features/Practices/ReactHookFormAllFeatures/DataContext';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <DataProvider>
  //       <App />
  //     </DataProvider>
  //   </BrowserRouter>
  // </React.StrictMode>
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SnackbarProvider anchorOrigin={{vertical:'top',horizontal:'right'}}  >
        <App />
        </SnackbarProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
