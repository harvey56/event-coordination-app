import * as React from 'react';
import { withStyles, WithStyles, Typography, Card, CardHeader, IconButton, CardContent, CardActions, FormControlLabel, Switch, CardMedia, Grid, ButtonBase, List, ListItem, ListItemText } from '@material-ui/core';
import styles from './styles'; 
import classNames from 'classnames';
import { LocationOn, Favorite, Share } from '@material-ui/icons';

interface OwnProps {
    cardHeaderTitle: string;
    image: string;
    price: string;
    rating: number;
    location: string;
    attendBar: any;
    loveBar: any;
}
interface State {
    location: string;
    cardHeaderTitle: string;
    cardHeaderSubheader: string;
    cardMediaImage: string;
    isAttending: boolean;
    isLoving: boolean;
}

type Props = OwnProps & WithStyles<typeof styles>

class EventCard extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);

        this.state = {
            location: "",
            cardHeaderTitle: "",
            cardHeaderSubheader: "",
            cardMediaImage: "",
            isAttending: false,
            isLoving: false,
        }
    }
    
    private renderPriceRange = () => (
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={8} wrap="nowrap">
            <Grid item>
                <Typography component="p">
                    Price range: 
                </Typography>
            </Grid>
            <Grid item>
            <Typography component="p">
                {this.props.price}
            </Typography>
            </Grid>
        </Grid>
    )

    private renderRating = () => (
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={8} wrap="nowrap">
            <Grid item>
                <Typography component="p">
                    Rating: 
                </Typography>
            </Grid>
            <Grid item>
            <Typography component="p">
                {this.props.rating}
            </Typography>
            </Grid>
        </Grid>
    )

    private renderLocation = () => (    
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={16} wrap="nowrap" >
            <LocationOn />
            {this.state.location}
        </Grid>
    )

    private handleOnChangeLove = () => {
        this.setState( prevState => {
            return { 
                isLoving: !prevState.isLoving 
            }
        }, 
            () => { this.props.loveBar(this.props.cardHeaderTitle, this.state.isLoving) }
        )
    }

    private handleOnChangeAttendance = () => {
        this.setState( prevState => {
            return { 
                isAttending: !prevState.isAttending 
            }
        }, 
            () => { this.props.attendBar(this.props.cardHeaderTitle, this.state.isAttending) }
        )
    }

    render() {
        const { classes } = this.props;
        const { isLoving } = this.state;
        const { cardHeaderTitle, image } = this.props;
        const location = Array.from(this.props.location);

        return (
            <React.Fragment>
                <Card className={classes.root}> 
                    {/* <Typography noWrap={false}> */}
                        <CardHeader
                            title={cardHeaderTitle}
                        />
                    {/* </Typography> */}

                    <CardMedia
                        // style={{height: 0, paddingTop: '56.25%'}}
                        image={image}
                        className={classes.media}
                        title="Bar pic"
                    />

                    <CardContent>
                        <Grid container direction="row" justify="center" alignItems="center" wrap="nowrap" className={classes.location}>
                            <LocationOn />
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary={location.slice(0, -2).toString()}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={location[location.length-2]}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid container direction="row" justify="space-between" alignItems="center" wrap="nowrap">
                            {this.renderPriceRange()}
                            {this.renderRating()}
                        </Grid>
                    </CardContent>

                    <CardActions disableActionSpacing>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <IconButton aria-label="Add to favorites" onClick={this.handleOnChangeLove}>
                                <Favorite color='action' className={classNames(isLoving && classNames(classes.faviconisactive))} />
                            </IconButton>
                            <FormControlLabel
                                control={
                                    <Switch
                                    value={this.state.isAttending}
                                    color="primary"
                                    />
                                }
                                label= "I'm going"
                                onChange={this.handleOnChangeAttendance}
                            />
                        </Grid>
                    </CardActions>
                </Card>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(EventCard);