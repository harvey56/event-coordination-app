///<reference types="webpack-env" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';

  
const renderDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
 }

renderDom();

//hot reloading done in the App component with react-hot-loader
// if (module.hot) {
//   console.log("hot update");
//   module.hot.accept('./App', () => {
//     renderDom();
//   });
// }
