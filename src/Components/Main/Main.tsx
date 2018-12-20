import * as React from 'react';
import { withStyles, WithStyles, Paper, Typography } from '@material-ui/core';
import styles from './styles'; 

interface OwnProps {

}

// interface OwnProps extends WithStyles<typeof styles>{}

type Props = OwnProps & WithStyles

const Main: React.SFC<Props> = (props) => {

    const { classes } = props;

    return (
        <React.Fragment>
            <Paper className={classes.root} elevation={2}>
                <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                </Typography>
            </Paper>
        </React.Fragment>
    )
}

export default withStyles(styles)(Main);