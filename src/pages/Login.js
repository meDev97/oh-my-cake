import React, { useState } from 'react'
import Auth from '../components/auth'
import validateLogin from '../hooks/auth/validateLogin'
import firebase from '../firebase'
import useFormValidation from '../hooks/auth/useFormValidation'

const INITIAL_STATE={
    email:'',
    password:''
}

function Login({history}) {
    const {changeHandler,blurHandler,submitHandler, values, errors} = useFormValidation(INITIAL_STATE,validateLogin,authenticate)
    const [errorFirebase, setErrorFirebase] = useState('')
  
    async function authenticate(values){
      const {email,password}=values
      try {
          await firebase.login(email,password)
          history.push('/')
      } catch (err) {
          setErrorFirebase(err.message)
      }
  }

    return (
        <Auth title='Signin' submit={submitHandler}>
            {errorFirebase && <Auth.SpanError>{errorFirebase}</Auth.SpanError>}
            <Auth.Input type='email' 
                        placeholder='Email'
                        name='email'
                        value={values.email}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                        error={!!errors.email}
                        />
            {errors.email && <Auth.SpanError>{errors.email}</Auth.SpanError>}
            <Auth.Input type='password' 
                        placeholder='Password'
                        name='password'
                        value={values.password}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                        error={!!errors.password}
                        />
            {errors.password && <Auth.SpanError>{errors.password}</Auth.SpanError>}
            <Auth.Submit type='submit' value='Signin' />
            <Auth.Text sign='Create an account' path='/register'>New user? </Auth.Text>
        </Auth>
    )
}

export default Login
