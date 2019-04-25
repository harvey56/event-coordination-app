import * as React from 'react';
import { 
  withStyles, 
  WithStyles, 
  Grid, 
  GridList, 
  GridListTile, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  MenuItem, 
  Paper,
  MenuList
} from '@material-ui/core';
import Card from '../Card/Card';
import styles from './styles'; 
import { CheckCircleOutline, AccessibleForward, Favorite } from '@material-ui/icons';

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

type Props = OwnProps & WithStyles
class ShowGridList extends React.Component<Props, State> {

    constructor(props: Props){
      super(props);
      this.state = {
        barsImGoingTo: [],
        barsILove: []
      }
    }

    private updateBarsILove = (businessName: string, love: boolean) => {
      if (love) {
        if (!this.state.barsILove.includes(businessName))
          this.state.barsILove.push(businessName);
      }
      else {
        let obj = this.state.barsILove.indexOf(businessName);
        if (obj !== -1) this.state.barsILove.splice(obj,1);
      }

      this.setState( (prevState) => ({
        barsILove: prevState.barsILove
      }));
    }

    private updateBarsImGoingTo = (businessName: string, attendance: boolean) => {
      if (attendance) {
        if (!this.state.barsImGoingTo.includes(businessName))
          this.state.barsImGoingTo.push(businessName);
      }
      else {
        let obj = this.state.barsImGoingTo.indexOf(businessName);
        if (obj !== -1) this.state.barsImGoingTo.splice(obj,1);
      }

      this.setState( (prevState) => ({
            barsImGoingTo: prevState.barsImGoingTo
      }));
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
                          attendBar={this.updateBarsImGoingTo}
                          loveBar={this.updateBarsILove}
                        />
                      </GridListTile>
                    )
                  })}
              </GridList>
            </Grid>
            <Grid item xs={2} className={classes.gridListNoTiles}>
              <Paper className={classes.paper}>
                <MenuList>
                  <MenuItem className={classes.menuItem} disabled>
                    <ListItemIcon className={classes.icon}>
                      <AccessibleForward />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Bars I'm going to:" />
                  </MenuItem>
                </MenuList>

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

                <MenuList>
                  <MenuItem className={classes.menuItem} disabled>
                    <ListItemIcon className={classes.icon}>
                      <Favorite />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Bars I love:" />
                  </MenuItem>
                </MenuList>
                  
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
              </Paper>
            </Grid>
          </Grid>
      )
    }
}

export default withStyles(styles)(ShowGridList);