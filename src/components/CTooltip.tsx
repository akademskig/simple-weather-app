import { withStyles, Theme, Tooltip } from '@material-ui/core';

export const CTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.grey[300],
        boxShadow: theme.shadows[2],
        fontSize: '0.8em',
    },
}))(Tooltip);