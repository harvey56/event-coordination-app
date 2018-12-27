import * as React from 'react';
import { withStyles, WithStyles, Grid, GridList, GridListTile } from '@material-ui/core';
import Card from '../Card/Card';
import { withTheme } from '@material-ui/core/styles';
import styles from './styles'; 

interface OwnProps {
    businesses: any;
}

// interface OwnProps extends WithStyles<typeof styles>{}

type Props = OwnProps & WithStyles

const ShowGridList: React.SFC<Props> = (props) => {

    const { classes, businesses } = props;

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
                <h4>Bars where I'm going:</h4>
          </Grid>
        </Grid>
    )
}

export default withStyles(styles)(ShowGridList);