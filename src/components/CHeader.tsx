import React from 'react';
import {Toolbar, makeStyles, createStyles, Theme} from '@material-ui/core'
import { CSelect } from './CSelect';
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
    },
    select:{
        color: theme.palette.getContrastText(theme.palette.primary.main)
    }
  }));
export function CHeader(){
    const classes = useStyles()
    return(
        <Toolbar className={classes.root} >
            <CSelect></CSelect>
        </Toolbar>
    )
}