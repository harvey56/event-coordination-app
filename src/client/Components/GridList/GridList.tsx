import * as React from 'react';
import { withStyles, WithStyles, Grid, GridList, GridListTile, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, MenuItem } from '@material-ui/core';
import Card from '../Card/Card';
import { withTheme } from '@material-ui/core/styles';
import styles from './styles'; 
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import AccessibleForward from '@material-ui/icons/AccessibleForward';
import Favorite from '@material-ui/icons/Favorite';

interface OwnProps {
    businesses: Businesses[];
}

interface Businesses {
  id: string;
  name: string;
  image_url: string;
  price: string;
  rating: number;
  location: string;
}

interface State {
  barsImGoingTo: string[];
  barsILove: string[];
}

// interface OwnProps extends WithStyles<typeof styles>{}

type Props = OwnProps & WithStyles

class ShowGridList extends React.Component<Props, State> {

    constructor(props: Props){
      super(props);
      this.state = {
        barsImGoingTo: [],
        barsILove: []
      }
    }

    render(){
      const { classes, businesses } = this.props;
      const { barsImGoingTo, barsILove } = this.state;

      return (
          <Grid container spacing={16} className={classes.container}>
            <Grid item xs={10} className={classes.gridList}>
              <GridList cellHeight={'auto'} spacing={10} cols={3}>
                  {businesses.map( (business) => {
                    return (
                      <GridListTile key={business.id}>
                        <Card 
                          cardHeaderTitle={business.name} 
                          image={business.image_url} 
                          price={business.price}
                          rating={business.rating}
                          location={business.location}
                        />
                      </GridListTile>
                    )
                  })}
              </GridList>
            </Grid>
            <Grid item xs={2} className={classes.gridListNoTiles}>
                <GridList cols={1} >
                  <GridListTile>
                    <MenuItem>
                      <ListItemIcon>
                        <AccessibleForward />
                      </ListItemIcon>
                      <Typography variant='h6' gutterBottom>
                        Bars I'm going to:
                      </Typography>
                    </MenuItem> 

                    <div className={classes.demo}>
                      <List dense={true}>
                        {barsImGoingTo.map( el => (
                          <ListItem key={el}>
                            <ListItemIcon>
                              <CheckCircleOutline />
                            </ListItemIcon>
                            <ListItemText primary={el} />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  </GridListTile>
                  
                  <GridListTile>
                    <MenuItem className={classes.menuitem}>
                      <ListItemIcon>
                        <Favorite />
                      </ListItemIcon>
                      <Typography variant='h6' gutterBottom>
                        Bars I love:
                      </Typography>
                    </MenuItem>                  
                    <div className={classes.demo}>
                      <List dense={true}>
                        {barsILove.map( el => (
                          <ListItem key={el}>
                            <ListItemIcon>
                              <CheckCircleOutline />
                            </ListItemIcon>
                            <ListItemText primary={el} />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  </GridListTile>
                </GridList>
            </Grid>
          </Grid>
      )
    }
}

export default withStyles(styles)(ShowGridList);