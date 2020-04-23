import React from 'react';
import {Toolbar} from '@material-ui/core'
import { CSelect } from './CSelect';
import styled from 'styled-components';

const CHeaderContainer=styled(Toolbar)`
    background-color: ${({theme}) => theme.colors.primary.background};
    .MuiFormLabel-root, .MuiInputBase-root{
       color: ${({theme}) => theme.colors.primary.text};
       svg, :before{
       color: ${({theme}) => theme.colors.primary.text};

       }
    }
`
export function CHeader(){
    return(
        <CHeaderContainer>
            <CSelect></CSelect>
        </CHeaderContainer>
    )
}