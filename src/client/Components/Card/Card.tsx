import * as React from 'react';
import { withStyles, WithStyles, Paper, Typography, Card, CardHeader, IconButton, CardContent, CardActions, FormControlLabel, Switch, CardMedia, Grid, ButtonBase } from '@material-ui/core';
import styles from './styles'; 

// import imgList from '../../options';

import LocationOn from '@material-ui/icons/LocationOn';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Star from '@material-ui/icons/Star';
import Favorite from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';
interface OwnProps {
    cardHeaderTitle: string;
    image: string;
    price: string;
    rating: number;
    location: string;
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
            location: "3 rue des lilas, 75001 Paris",
            cardHeaderTitle: "Super cool bar in the CBD",
            cardHeaderSubheader: "",
            cardMediaImage: "",
            price: ['$'],
            rating: [1],
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
                {this.props.price}
                {/* below iteration with mockup data */}
                {/* {this.state.price.map( (price, idx) => <AttachMoney /> )} */}
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
                {/* below iteration with mockup data */}
                {/* {this.state.rating.map( (star, idx) => <Star /> )} */}
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

    render() {
        const { classes } = this.props;
        const { cardHeaderTitle, image, price, rating, /*, cardHeaderSubheader, cardMediaImage, price, rating, location*/ } = this.props;

        return (
            <React.Fragment>
                <Card className={classes.root}> 
                    <Typography noWrap={false}>
                        <CardHeader
                            action={
                                <IconButton>
                                
                                </IconButton>
                            }
                            title={cardHeaderTitle}
                            // subheader="September 14, 2018"
                        />
                    </Typography>

                    <CardMedia
                        style={{height: 0, paddingTop: '56.25%'}}
                        image= {image}/*{imgList[0].img}*/
                        className={classes.media}
                        title="Bar pic"
                    />

                    <CardContent>
                        <Grid container direction="row" justify="center" alignItems="center" wrap="nowrap" className={classes.location}>
                            <LocationOn />
                            {this.props.location}
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
                                label= "I'm going"// {this.state.isAttending ? "I'm Going" : "I'm not Going"}
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