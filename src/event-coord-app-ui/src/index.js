import React from "react";
import ReactDOM from "react-dom";
import store from './store/store';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';

import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import App from './Components/App';

// Apollo client definition
const client = new ApolloClient({
    uri: 'https://event-coordination-app.herokuapp.com/graphql', //'http://localhost:4000/graphql',
    headers: {
      authorization: `Bearer ${process.env.API_KEY}`,
      'content-type': 'application/json',
      // 'locale': 'en_US'
    }
});

const Root = ({store}) => {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    )
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

//hot reloading done in the App component with react-hot-loader
// if (module.hot) {
//   console.log("hot update");
//   module.hot.accept('./Root', () => {
//     renderDom();
//   });
// }
