import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/ReduxStore';
import {Provider} from 'react-redux';
import {Preloader} from './components/Common/Preloader/Preloader';

const rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<Preloader/>}>
        <App/>
      </Suspense>
    </Provider>,
    document.getElementById('root')
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});
