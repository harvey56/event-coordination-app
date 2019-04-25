import { Theme, createStyles } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';

const styles = (theme: Theme) => createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: theme.palette.primary.light,
      padding: '50px 50px',
      marginBottom: '40px'
    },
    margin: {
        margin: theme.spacing.unit,
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