import React from 'react'
import Title from '../title'
import LogoImg from '../../images/logo-cake.png'
import {Container,Form,Input,Submit,SpanError,LinkAuth,Base,Logo,Text} from './styles/auth'
import { Link } from 'react-router-dom'

function Auth({children,title,submit}) {
    return (
        <Container>
            <Base>
                <Logo><Link to='/'><img src={LogoImg}/></Link></Logo>
                <Title>{title}</Title>
                <Form onSubmit={submit}>
                    {children}
                </Form>
            </Base>
        </Container>
    )
}
Auth.Input=function AuthInput({...restProps}){
    return (
        <Input {...restProps}/>
    )
}
Auth.Submit=function AuthSubmit({children,...restProps}){
    return (
        <Submit {...restProps}/>
    )
}
Auth.Text=function AuthText({children,path,sign}){
    return (
        <Text> {children } <LinkAuth to={path}>{sign}</LinkAuth></Text>
    )
}
Auth.SpanError=function AuthSpanError({children}){
    return (
        <SpanError> {children} </SpanError>
    )
}


export default Auth
