import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({

    root: {
        'max-width': '450px',
        backgroundColor: '#f5f5f5',
        ...theme.mixins.gutters(),
    },
    location: {
        margin: '15px'
    }

})

export default styles;