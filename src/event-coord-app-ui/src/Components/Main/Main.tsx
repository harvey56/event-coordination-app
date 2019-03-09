import * as React from 'react';
import { withStyles, WithStyles, Paper, Typography } from '@material-ui/core';
import styles from './styles'; 
import SearchInput from '../Input/SearchInput';
import { Data } from '../../Queries';

interface OwnProps {

}

interface State {
    searchLocation: string
    location: string
}

// interface OwnProps extends WithStyles<typeof styles>{}

type Props = OwnProps & WithStyles

class Main extends React.Component<Props, State> {

    constructor(props: Props){
      super(props);
  
      this.state = {
        searchLocation: "",
        location: ""
      }
    }
  
    private handleChangeSearchLocation = (searchLocation: string) => {
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
        const authenticated = true;
        const { searchLocation, location/*,authenticated*/ } = this.state;
        const ShowSearchedData = <Data location={location}/>;
        const Blank = <div></div>;
        const SearchPage = (
          <React.Fragment>
            <SearchInput onSearchLocationChange={this.handleChangeSearchLocation} searchLocation={searchLocation} onClick={this.setLocation}/>
            { location ? ShowSearchedData : Blank }
          </React.Fragment>
        );
        const LandingPage = <div></div>

        return (
            <React.Fragment>
                {/* <Paper className={classes.root} elevation={2}> */}
                { authenticated ? SearchPage : LandingPage }
                {/* </Paper> */}
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Main);