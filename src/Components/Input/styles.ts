import { Theme, createStyles } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import cyan from '@material-ui/core/colors/cyan';

const styles = (theme: Theme) => createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: theme.palette.primary.light,
      padding: '50px 50px'
      //   backgroundColor: theme.palette.background.paper
    },
    margin: {
        margin: theme.spacing.unit,
    },
    search: {
        'min-height': '250px',        
    },
    cssLabel: {
      '&$cssFocused': {
        color: purple[500],
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: purple[500],
      },
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: purple[500],
      },
    },
    notchedOutline: {},
  });

  export default styles;