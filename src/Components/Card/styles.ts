import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({

    root: {
        'max-width': '300px',
        ...theme.mixins.gutters(),
    }

})

export default styles;