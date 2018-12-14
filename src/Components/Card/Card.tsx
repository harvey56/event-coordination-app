import * as React from 'react';
import { withStyles, WithStyles, Paper, Typography, Card, CardHeader, IconButton, CardContent, CardActions, FormControlLabel, Switch, CardMedia, Grid } from '@material-ui/core';
import styles from './styles'; 
import { AddressIcon, PriceIcon, RatingIcon } from '../Icons/IconsList';

interface OwnProps {

}

type Props = OwnProps & WithStyles

const EventCard: React.SFC<Props> = (props) => {

    const { classes } = props;

    return (
        <React.Fragment>
            <Card className={classes.root}> 
                <Typography noWrap={false}>
                    <CardHeader
                        action={
                            <IconButton>
                            
                            </IconButton>
                        }
                        title="Very cool bar in the city"
                        subheader="September 14, 2018"
                    />
                </Typography>
                
                <CardMedia
                    className={classes.media}
                    image="/path/to/image/image.jpg"
                    title="Bar pic"
                />

                <CardContent>
                    <Grid container direction="row" justify="center" alignItems="center" >
                        <Typography component="p">
                            <AddressIcon />
                        </Typography>
                    </Grid>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" >
                        <Typography component="div">
                            <PriceIcon />
                        </Typography>
                        <Typography component="div">
                            <RatingIcon />
                        </Typography>
                    </Grid>
                </CardContent>

                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        {/* <FavoriteIcon /> */}
                    </IconButton>
                    <IconButton aria-label="Share">
                        {/* <ShareIcon /> */}
                    </IconButton>
                    <FormControlLabel
                        control={
                            <Switch
                            // checked={this.state.checkedB}
                            // onChange={this.handleChange('checkedB')}
                            value="checkedB"
                            color="primary"
                            />
                        }
                        label="I'm Going"
                    />
                    <IconButton
                        // className={classnames(classes.expand, {
                        // [classes.expandOpen]: this.state.expanded,
                        // })}
                        // onClick={this.handleExpandClick}
                        // aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                    </IconButton>
                </CardActions>
            </Card>
        </React.Fragment>
    )
}

export default withStyles(styles)(EventCard);