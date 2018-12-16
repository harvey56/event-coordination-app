import * as React from 'react';
import { hot } from 'react-hot-loader'
import Card from './Components/Card/Card';
import ButtonAppBar from './Components/HeaderBar/AppBar';
import Input from '@material-ui/core/Input';
import SearchInput from './Components/Input/SearchInput';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProviderProps } from '@material-ui/core/styles/MuiThemeProvider';

type Props = MuiThemeProviderProps;

const App:React.SFC = (props: Props) => {
  return (
    <div>
      {/* <MuiThemeProvider theme={props.theme}>
        <ButtonAppBar />
        <SearchInput />
      </MuiThemeProvider> */}
      <Card />
    </div>
  );
}

export default hot(module)(App);