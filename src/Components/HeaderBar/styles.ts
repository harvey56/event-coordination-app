import { Theme, createStyles } from '@material-ui/core';

const styles = (theme:Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
});
  
export default styles;