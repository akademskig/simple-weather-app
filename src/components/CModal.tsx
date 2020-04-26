
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    modal: {
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
    }
}));

function CModal({ children }: any) {
    const classes = useStyles()
    return (
        <div className={classes.modal}>
            {children}
        </div>
    )
}

export default CModal