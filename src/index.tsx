import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styleIndex';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import globalEs from './translations/es/global.json';
import globalEn from './translations/en/global.json';
import { Provider } from 'react-redux';
import { store } from './redux/store';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: globalEs,
    },
    en: {
      global: globalEn,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <GlobalStyle />
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
