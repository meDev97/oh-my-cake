import { useEffect, useState } from "react"


function useFormValidation(initialState,validate,authenticate) {

    const [values, setValues] = useState(initialState)
    
    const [errors, setErrors] = useState({})

    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        if(isSubmit){
            if(Object.keys(errors).length === 0){
                authenticate(values)
                setIsSubmit(false)
            }else{
                setIsSubmit(false)
            }
        }

    }, [errors,authenticate,isSubmit,values])

    function changeHandler(event){
        setValues(prevValues=> ({
            ...prevValues,
            [event.target.name]:event.target.value 
        }))
    }

    function blurHandler(){
        const validateError = validate(values)
        setErrors(validateError)
    }

    function submitHandler(event){
        event.preventDefault()
        const validateError = validate(values)
        setErrors(validateError)
        setIsSubmit(true)
    }

return {changeHandler,blurHandler,submitHandler, values, errors}
}

export default useFormValidation
