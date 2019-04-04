import * as React from 'react';
import { hot } from 'react-hot-loader';
import ButtonAppBar from './HeaderBar/AppBar';
import { MuiThemeProvider, withTheme, WithTheme } from '@material-ui/core/styles';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import SignUp, { AuthStateProps } from './SignUp/SignUp';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import SearchPage from './SearchBar/SearchBar';
import PrivateRoute from './SearchBar/PrivateRoute';
import { AuthState } from '../actions/authActions';
import { connect } from 'react-redux';

interface OwnProps {
}

interface State {

}

type Props = OwnProps & WithTheme & AuthStateProps & RouteComponentProps<{id: string}>;
class App extends React.Component<Props, State> {

  render(){
    const { theme } = this.props;
    
    return (
      <MuiThemeProvider theme={theme}>
          <ButtonAppBar {...this.props}/>
          <Switch>
            <PrivateRoute exact path="/" {...this.props} component={SearchPage}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/logout" component={Logout} />
          </Switch>                          
      </MuiThemeProvider>
    );
  }
}



const mapStateToProps = (state: AuthState, props: OwnProps): AuthStateProps => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    isFetching: state.authReducer.isFetching,
    user: state.authReducer.user
  };
};

const styledComponent = withTheme()(App);
export default withRouter(connect(mapStateToProps, {})(styledComponent));

// export default hot(module)(App);