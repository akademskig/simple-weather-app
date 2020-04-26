import React, { Fragment } from 'react';
import { CHeader } from '../components/CHeader';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import clouds from '../assets/cloudsWallpaper.jpg'
const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        height: `calc(90vh - 64px)`,
        backgroundImage: ` url(${clouds})`,
        backgroundColor: '#000',
        backgroundSize: 'cover',
        opacity: 0.9,
        paddingTop: '10vh',
        [theme.breakpoints.down('xs')]: {
            height: `calc(90vh - 56px)`,
            paddingLeft: '0.5em',
            paddingRight: '0.5em'
        }
    },
}));

export function LMain({ children }: { children: any }) {

    const classes = useStyles()
    return (
        <Fragment>
            <CHeader></CHeader>
            <div className={classes.container}>
                {children}
            </div>
        </Fragment>
    )
}