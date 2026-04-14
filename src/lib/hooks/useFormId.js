import { useState, useRef } from 'react';

export const useFormId = (initialForm = {}, onSubmit) => {
  const [formState, setFormState] = useState(initialForm);

  //show data in the inputs
  const handleChange = ({ target }) => {
    const { name, value } = target;
    let validation = validateField(formState[name], target.name)
    setFormState({
      ...formState,
      [name]: {
        value: value,
        isValid : validation
      }
    })
  }
  //Some Validation patterns
  const patterns = {
    name: /^[a-zA-ZÄ-ÿ\s]{2,60}$/,
    description: /^[\s\S]{4,100}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    pasword:  /^(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.[#?!@$%^&*-]).{8,}$/,
    //email: /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+.(com|net|org)/,
    code: /^\d{3,14}/,
    document: /^\d{7,14}$/,
    phone: /^\d{7,14}$/,
    date: /^\d{4}(:|-)\d{2}/,
    hour: /^\d{2}:\d{2}\s?/
  }
  const validateField = (arg, type) => {
    let upper = /[A-Z]/;
    let hasUpper = '';
    let regex = '';
    if(type.search(upper) > 0){
      //console.log(type.search(upper));
      hasUpper = type.slice(type.search(upper));
      //console.log(hasUpper)
      regex = patterns[hasUpper.toLowerCase()];
    }else{
      regex = patterns[type];
    }
    arg = arg.value ? arg.value.trim() : "";
    //console.log(patterns[type], type)
    if (arg === "") {
      return `${arg} is empty`
    } else {
      return regex.test(arg);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    for(let item in formState){
      if(item.isValid){
        console.log("All form was successful validated");
      }
    }

    //cambar el id cuando se enviar la info
    setFormState({
      ...formState,
      //assign and id to the form (object)
      id: { value: crypto.randomUUID(), isValid: true }
    })
    //
    // validate the fields to send store the data
    // send data to another component if theres no DDBB(optional)
    onSubmit({ ...formState });
    // Clear the inputs after send the information

    const clearInput = () => {
      setFormState(
        {
          id: { value: crypto.randomUUID(), isValid: null },
          name : {value: "", isValid: null},
          email : {value: "", isValid: null},
          petName : {value: "", isValid: null},
          typeName : {value: "", isValid: null},
          raceName : {value: "", isValid: null},
          date : {value: "", isValid: null},
          hour : {value: "", isValid: null},
          description : {value: "", isValid: null}
        }
      );
    }
    clearInput();
  }


  return {
    ...formState,
    formState,
    handleChange,
    handleSubmit
  }
}
