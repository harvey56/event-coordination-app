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

type Props = OwnProps & WithStyles

class SearchBar extends React.Component<Props, State> {

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
        const { classes } = this.props;
        const { searchLocation, location } = this.state;
        const ShowSearchedData = <Data location={location}/>;
        const Blank = <div></div>;

        return (
            <React.Fragment>
                <Paper className={classes.root} elevation={2}>
                  <SearchInput onSearchLocationChange={this.handleChangeSearchLocation} searchLocation={searchLocation} onClick={this.setLocation}/>
                  { location ? ShowSearchedData : Blank }
                </Paper>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(SearchBar);