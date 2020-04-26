import { withStyles, Theme, Tooltip } from '@material-ui/core';

export const CTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[2],
        fontSize: '0.8em',
    },
}))(Tooltip);