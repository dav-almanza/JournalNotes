import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setformValidation ] = useState({})

    useEffect(() => {
      validators();
    }, [formState]);  // cuando hay un cambio en los inputs se ejecutan las validaciones...

    useEffect(() => {
      setFormState( initialForm );
    }, [initialForm])
    
    
    const validators = () => {
        const checkedValues = {};
        for (const inputKeys of Object.keys(formValidations)) {
            const [ fn, errorMessage = 'Validations errors' ] = formValidations[inputKeys];
            checkedValues[`${inputKeys}Valid`] = fn( formState[inputKeys] ) ? null : errorMessage;
        }
        setformValidation(checkedValues);  // cambiar el estado del objeto de validacion
    }

    const isFormValidforSubmit = useMemo( () => {
        for (const valueChecked of Object.keys(formValidation) ) {
           if (formValidation[valueChecked] !== null) return false; 
        }
        return true;
    },[formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }


    return {
        formState,
        ...formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValidforSubmit,
    }
}