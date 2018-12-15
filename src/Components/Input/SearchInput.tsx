import * as React from 'react';
import Input from '@material-ui/core/Input';
import { TextField, WithStyles, withStyles, Button, Grid, Typography } from '@material-ui/core';
import styles from './styles';

type Props = WithStyles

const SearchInput: React.SFC<Props> = (props: Props) => {
    
    const { classes } = props;

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
                />
                <Button variant="contained" size="large" color="primary" className={classes.margin}>
                    Search
                </Button>
            </Grid>
        </Grid>
        </div>
    )
}

export default withStyles(styles)(SearchInput);