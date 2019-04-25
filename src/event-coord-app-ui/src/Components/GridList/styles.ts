import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({

    root: {
        ...theme.mixins.gutters(),
    },
    menuitem: {
        alignItems: 'center'
    },
    demo: {
        minHeight: 200
    }

})

export default styles;