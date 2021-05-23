
function validateLogin(values) {
    let errors = {} 
    
    if(!values.email){
        errors.email= 'email is required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email ='invalid email'
    }
    if(!values.password){
        errors.password= 'password is required'
    }else if(values.password.length < 6){
        errors.password= 'password is to short'
    }
    return errors
}

export default validateLogin
