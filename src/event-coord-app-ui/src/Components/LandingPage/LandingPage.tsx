import * as React from 'react';
import ButtonAppBar from '../HeaderBar/AppBar';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Grid, Typography, ListItemIcon, ListItem, List, ListItemText } from '@material-ui/core';
import barPic from '../../images/c553cf3a-3f68-4800-afa9-6f0d2822b74a_iStock_000017197016Medium.jpg';
import progPic from '../../images/proxy.duckduckgo.com.jpeg';
import { Done } from '@material-ui/icons';

interface OwnProps {

}

type Props = OwnProps & WithStyles;

const LandingPage: React.FC<Props> = (props) => {
    const { classes } = props;

    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center" spacing={32} className={classes.container}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
              <Grid item>
                <img className={classes.img} alt="bar" src={barPic} />
              </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography component="h3" variant="display3" gutterBottom className={classes.text}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Done />
                  </ListItemIcon>
                  <ListItemText                    
                    primary="See the list of bars next to where you live"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Done />
                  </ListItemIcon>
                  <ListItemText
                    primary="Select your favourite bars"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Done />
                  </ListItemIcon>
                  <ListItemText
                    primary="Select which bars you plan to go to"
                  />
                </ListItem>  
              </List>
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center" spacing={24}>  
          <Grid item xs={2}></Grid>        
          <Grid item xs={4}>
            <Typography component="h3" variant="display3" gutterBottom className={classes.text}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Done />
                </ListItemIcon>
                <ListItemText
                  primary="This full stack app is meant to practice my JS skills"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Done />
                </ListItemIcon>
                <ListItemText
                  primary="It is based on ReactJS, Redux, Redux saga, Typescript for the frontend"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Done />
                </ListItemIcon>
                <ListItemText
                  primary="NodeJS and express for the backend, and a MongoDB database"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Done />
                </ListItemIcon>
                <ListItemText
                  primary="It also relies on a Apollo graphQL server to fetch data, which is hosted on heroku"
                />
              </ListItem>
            </List>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <img className={classes.img} alt="bar" src={progPic} />
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    );
}


const styledComponent = withStyles(styles)(LandingPage);
export default styledComponent;