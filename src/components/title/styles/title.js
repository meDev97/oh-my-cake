
import styled from 'styled-components/macro'
import { primary } from '../../../constants/colors'

export const TitleSection = styled.h2`
    font-size: 3.2rem;
    color:${primary};
    &::first-letter{
        text-transform:uppercase;
    };
`