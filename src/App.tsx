import * as React from 'react';
import { hot } from 'react-hot-loader'
import Card from './Components/Card/Card';
import ButtonAppBar from './Components/HeaderBar/AppBar';
import Input from '@material-ui/core/Input';
import SearchInput from './Components/Input/SearchInput';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
// import { gql } from 'apollo-boost';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import axios from 'axios';
import ApolloClient from 'apollo-boost';

type Props = MuiThemeProviderProps;

// const App:React.SFC = (props: Props) => {
//   return (
//     <div>
//       <MuiThemeProvider theme={props.theme}>
//         <ButtonAppBar />
//         <SearchInput />
//       </MuiThemeProvider>
//       {/* <Card /> */}
//     </div>
//   );
// }

const GET_BARS = gql`
{
    business(id: "garaje-san-francisco") {
        name
        id
        alias
        rating
        url
    }
}
`
const App = () => (
  <Query query={GET_BARS}>
    {({ data, loading }) => {
      const { business } = data;

      if (loading || !data) {
        return <div>Loading ...</div>;
      }

      return(
        <div>Test</div>
      )
    }
    }
  </Query>
);

// const App = () => (
//   <Query query={GET_BARS} client={client}>
//     {({ loading, error, data }) => {
//       if (loading) return <div>Loading...</div>;
//       if (error) return <div>
//         Error :(
//           {console.log("error: ", error)}
//       </div>;

//       return (
//         <h1>{data}</h1>
//       )
//     }}
//   </Query>
// )

export default hot(module)(App);