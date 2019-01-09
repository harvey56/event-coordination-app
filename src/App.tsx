import * as React from 'react';
import { hot } from 'react-hot-loader'
import ButtonAppBar from './Components/HeaderBar/AppBar';
import SearchInput from './Components/Input/SearchInput';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';
import { Data } from './Queries';
import {theme} from './styles';
// import axios from 'axios';
// import ApolloClient from 'apollo-boost';
// import { Grid, GridList, GridListTile } from '@material-ui/core';
// import { GET_BARS } from './Queries';
// import ShowGridList from './Components/GridList/GridList';

interface OwnProps {
}

interface State {
  searchLocation: string
  location: string
}

type Props = /*MuiThemeProviderProps &*/ OwnProps;

// const App:React.SFC = (props: Props) => {
class App extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);

    this.state = {
      searchLocation: "",
      location: ""
    }
  }

  private handleChangeSearchLocation = (searchLocation) => {
    this.setState({
      searchLocation: searchLocation
    })
  }

  private setLocation = () => {
    this.setState({
      location: this.state.searchLocation
    })
  }

  render(){

    // const { theme } = this.props;
    const { searchLocation, location } = this.state;

    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <ButtonAppBar />
          <SearchInput onSearchLocationChange={this.handleChangeSearchLocation} searchLocation={searchLocation} onClick={this.setLocation}/>
          { location ? <Data location={location}/> : <div></div> }      
        </MuiThemeProvider>
      </div>
    );
  }
}

export default hot(module)(App);