
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    center: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        '& .modalText': {
            marginLeft: '1em'
        }
    },
    topRight: {
        position: 'absolute',
        display: 'flex',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "flex-end",
        color: theme.palette.error.dark,
        '& :hover': {
            cursor: 'pointer',
        }
    }
}))

function CModal({ color, position, children }: any) {
    const classes = useStyles({ color })
    return (
        <div className={position === "topRight" ? classes.topRight : classes.center}>
            {children}
        </div>
    )
}

export default CModal