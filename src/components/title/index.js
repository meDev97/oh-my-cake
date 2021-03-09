import React from 'react'
import {TitleSection} from './styles/title'
function Title({children}) {
    return (
        <TitleSection>
            {children}
        </TitleSection>
    )
}

export default Title
