import React from 'react'
import {IoLocationOutline} from 'react-icons/io5'
import {HiOutlinePhone} from 'react-icons/hi'
import {AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {Container,Base,Icon} from './styles/iconsInfo'

function IconsInfo({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}
IconsInfo.Location= function IconsLocation(){
    return(
        <Base left>
        <Icon><IoLocationOutline/></Icon>
        <Icon><HiOutlinePhone/></Icon>
        </Base>
    )
}
IconsInfo.Media= function IconsMedia(){
    return(
        <Base>
        <Icon><AiOutlineTwitter/></Icon>
        <Icon><FaFacebookF/></Icon>
        <Icon><AiFillInstagram/></Icon>
        </Base>
    )
}
export default IconsInfo
