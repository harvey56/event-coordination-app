import { createStyles, Theme } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

// const styles = (theme: Theme) => createStyles({

//     root: {

//     }

// })

// export default styles;

const theme = (theme:Theme) => createMuiTheme({
    palette: {
        primary: purple,
        secondary: {
            main: '#f44336',
        },
    },
});

export default theme;