import React, { useState } from 'react'
import Auth from '../components/auth'
import firebase from '../firebase'
import useFormValidation from '../hooks/auth/useFormValidation'
import validateRegiter from '../hooks/auth/validateRegister'

const INITIAL_STATE={
    name:'',
    email:'',
    password:'',
    confirmePassword:'',
}
function Register({history}) {
    const {changeHandler,blurHandler,submitHandler, values, errors} = useFormValidation(INITIAL_STATE,validateRegiter,authenticate)
    const [errorFirebase, setErrorFirebase] = useState('')

    async function authenticate(values){
      const {name,email,password}=values
      try {
          await firebase.register(name,email,password)
          history.push('/')
      } catch (err) {
          setErrorFirebase(err.message)
      }
  }
    return (
        <Auth title='Signup' submit={submitHandler}>
            {errorFirebase && <Auth.SpanError>{errorFirebase}</Auth.SpanError>}
            <Auth.Input type='text' 
                        placeholder='User name'
                        value={values.name}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                        name= 'name'
                        error={!!errors.name}
                        />
            {errors.name && <Auth.SpanError>{errors.name}</Auth.SpanError>}
            <Auth.Input type='email' 
                        placeholder='Email'
                        value={values.email}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                        name= 'email'
                        error={!!errors.email}
                        />
            {errors.email && <Auth.SpanError>{errors.email}</Auth.SpanError>}
            <Auth.Input type='password' 
                        placeholder='Password'
                        value={values.password}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                        name= 'password'
                        error={!!errors.password}
                        />
            {errors.password && <Auth.SpanError>{errors.password}</Auth.SpanError>}
            <Auth.Input type='password' 
                        placeholder='Confirm password'
                        value={values.confirmePassword}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                        name= 'confirmePassword'
                        error={!!errors.confirmePassword}
                        />
            {errors.confirmePassword && <Auth.SpanError>{errors.confirmePassword}</Auth.SpanError>}
            <Auth.Submit type='submit' 
                            value='Signup' 
                            />
            <Auth.Text sign='Signin' path='/login'>Already have an account ? </Auth.Text>
        </Auth>
    )
}

export default Register
