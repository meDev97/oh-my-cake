import React from 'react'
import {Line,Icons} from './styles/lineIcons'
function LineIcons({children,left}) {
    return (
        <Line props={left}>
            <Icons>{children}</Icons>
        </Line>
    )
}

export default LineIcons
