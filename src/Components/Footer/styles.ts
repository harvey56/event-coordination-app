import { createStyles, Theme } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({

    root: {
        ...theme.mixins.gutters(),
    }

})

export default styles;