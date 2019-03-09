import * as React from 'react';
import { hot } from 'react-hot-loader';
import ButtonAppBar from './HeaderBar/AppBar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {theme} from './styles';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Main from './Main/Main';
// import { GET_BARS } from './Queries';
// import ShowGridList from './Components/GridList/GridList';

interface OwnProps {
}

interface State {

}

type Props = /*MuiThemeProviderProps &*/ OwnProps;


// const App:React.SFC = (props: Props) => {
class App extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);

    this.state = {

    }
  }

  render(){
    return (
        <MuiThemeProvider theme={theme}>
          <ButtonAppBar />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
            </Switch>                          
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(App);