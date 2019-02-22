import * as React from 'react';
import Input from '@material-ui/core/Input';
import { TextField, WithStyles, withStyles, Button, Grid, Typography } from '@material-ui/core';
import styles from './styles';

interface OwnProps {
    onSearchLocationChange: any
    searchLocation: string
    onClick: () => void
}

interface State {
}

type Props = WithStyles & OwnProps

// const SearchInput: React.SFC<Props> = (props: Props) => {
class SearchInput extends React.Component<Props, State> {
    
    constructor(props: Props){
        super(props);

    }
    
    private handleOnChange = (event) => {
        this.props.onSearchLocationChange(event.target.value);
    };

    private handleOnClick = () => {
        this.props.onClick();
    }

    render(){
        const { classes } = this.props;
        const { searchLocation } = this.props;
        
        return(
            <div className={classes.search}>
            <Grid container direction="column" alignItems="center" justify="flex-start" className={classes.container}>
                <Typography variant="h3" gutterBottom>
                    Search for a bar around you                
                </Typography>
                <Grid container direction="row" alignItems="center" justify="center" >
                    <TextField
                        // className={classes.margin}
                        InputLabelProps={{
                        classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        },
                        }}
                        InputProps={{
                        classes: {
                            root: classes.cssOutlinedInput,
                            focused: classes.cssFocused,
                            notchedOutline: classes.notchedOutline,
                        },
                        }}
                        label="Search..."
                        variant="outlined"
                        id="custom-css-outlined-input"
                        onChange={this.handleOnChange}
                        value={searchLocation}
                    />
                    <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.handleOnClick}>
                        Search
                    </Button>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(SearchInput);