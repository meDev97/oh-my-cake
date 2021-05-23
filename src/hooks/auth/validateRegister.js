
function validateRegiter(values) {
    let errors = {}
    if(!values.name){
        errors.name = 'Name is required'
    }
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
    if(!values.confirmePassword){
        errors.confirmePassword= 'confirme Password is required'
    }else if(values.confirmePassword !== values.password){
        errors.confirmePassword= 'confirme Password is not equel to password'
    }

    return errors
}

export default validateRegiter