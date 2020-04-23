import React from 'react';
import styled from 'styled-components';
import { CHeader } from '../components/CHeader';

const LMainContainer = styled.div`
`
export function LMain({children}:{children: any}) {
    return (
        <LMainContainer>
          <CHeader></CHeader>
            {children}
        </LMainContainer>
    )
}