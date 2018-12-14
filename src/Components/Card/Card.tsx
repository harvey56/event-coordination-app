import * as React from 'react';
import { withStyles, WithStyles, Paper, Typography, Card, CardHeader, IconButton, CardContent, CardActions, FormControlLabel, Switch, CardMedia, Grid, ButtonBase } from '@material-ui/core';
import styles from './styles'; 

import imgList from '../../options';

import LocationOn from '@material-ui/icons/LocationOn';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Star from '@material-ui/icons/Star';
import Favorite from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';
interface OwnProps {

}

interface State {
    location: string;
    cardHeaderTitle: string;
    cardHeaderSubheader: string;
    cardMediaImage: string;
    price: string[];
    rating: number[];
    isAttending: boolean;
}

type Props = OwnProps & WithStyles

// const EventCard: React.SFC<Props> = (props) => {
class EventCard extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);

        this.state = {
            location: "",
            cardHeaderTitle: "Super cool bar in the CBD",
            cardHeaderSubheader: "",
            cardMediaImage: "../../../public/pic.jpg",
            price: ['$', '$', '$', '$', '$'],
            rating: [1, 1, 1, 1, 1],
            isAttending: false
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
                {this.state.price.map( (price, idx) => <AttachMoney /> )}
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
                {this.state.rating.map( (star, idx) => <Star /> )}
            </Typography>
            </Grid>
        </Grid>
    )

    private renderLocation = () => (
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={16} wrap="nowrap">
            <LocationOn />
            {this.state.location}
        </Grid>
    )

    render() {
        const { classes } = this.props;
        const { cardHeaderTitle, cardHeaderSubheader, cardMediaImage, price, rating, location } = this.state;

        return (
            <React.Fragment>
                <Card className={classes.root}> 
                    <Typography noWrap={false}>
                        <CardHeader
                            action={
                                <IconButton>
                                
                                </IconButton>
                            }
                            title={cardHeaderTitle} // "Very cool bar in the city"
                            // subheader="September 14, 2018"
                        />
                    </Typography>

                    <CardMedia
                        style={{height: 0, paddingTop: '56.25%'}}
                        // image={require("../../../public/pic.jpg")}
                        image={imgList[0].img}
                        className={classes.media}
                        title="Bar pic"
                    />
                        {/* <img src={cardMediaImage}/>
                    </CardMedia>*/}

                    <CardContent>
                        <Grid container direction="row" justify="center" alignItems="center" >
                            {this.renderLocation()}
                        </Grid>
                        <Grid container direction="row" justify="space-between" alignItems="center" wrap="nowrap">
                            {this.renderPriceRange()}
                            {this.renderRating()}
                        </Grid>
                    </CardContent>

                    <CardActions className={classes.actions} disableActionSpacing>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <IconButton aria-label="Add to favorites">
                                <Favorite />
                            </IconButton>
                            <IconButton aria-label="Share">
                                <Share />
                            </IconButton>
                            <FormControlLabel
                                control={
                                    <Switch
                                    // checked={this.state.checkedB}
                                    // onChange={this.handleChange('checkedB')}
                                    value={this.state.isAttending} // "checkedB"
                                    color="primary"
                                    />
                                }
                                label={this.state.isAttending ? "I'm Going" : "I'm not Going"}
                                onChange={() => {this.setState({isAttending: !this.state.isAttending})}}
                            />
                        </Grid>
                    </CardActions>
                </Card>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(EventCard);