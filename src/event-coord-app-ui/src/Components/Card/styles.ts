import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({

    root: {
        'max-width': '450px',
        backgroundColor: '#f5f5f5',
        ...theme.mixins.gutters(),
    },
    location: {
        margin: '15px'
    },
    media: {
        height: 0, 
        paddingTop: '56.25%'
    },
    faviconisactive: {
        color: 'red'
    }

})

export default styles;