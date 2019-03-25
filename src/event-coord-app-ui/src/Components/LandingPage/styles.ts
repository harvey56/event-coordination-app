import { Theme, createStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    root: {
      flexGrow: 1,
      marginTop: 30
    },
    container: {
      gridGap: `${theme.spacing.unit * 3}px`
    },
    text: {
      color: 'purple', //theme.palette.text.secondary,
    },
    img: {
      width: '100%',
      borderRadius: '5%'
    }
  });

  export default styles;