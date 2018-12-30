import * as React from 'react';
import { hot } from 'react-hot-loader'
import ButtonAppBar from './Components/HeaderBar/AppBar';
import SearchInput from './Components/Input/SearchInput';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
import { Data } from './Queries';
// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
// import axios from 'axios';
// import ApolloClient from 'apollo-boost';
// import { Grid, GridList, GridListTile } from '@material-ui/core';
// import { GET_BARS } from './Queries';
// import ShowGridList from './Components/GridList/GridList';

type Props = MuiThemeProviderProps;

const App:React.SFC = (props: Props) => {
  return (
    <div>
      <MuiThemeProvider theme={props.theme}>
        <ButtonAppBar />
        <SearchInput />
        <Data location = "newcastle Australia" />        
      </MuiThemeProvider>
    </div>
  );
}

export default hot(module)(App);