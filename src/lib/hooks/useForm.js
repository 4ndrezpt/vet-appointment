import { useState } from 'react';

export const useForm = ( initialForm = {} )=> {

  const [formState, setFormState] = useState(initialForm);

  const patterns = {
    names : /^[a-zA-ZÄ-ÿ\s]{3,60}$/,
    minTexts: /^[\s\S]{4,100}$/,
    emails : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+.(com|net|org)/,
    codes: /^\d{3,14}/,
    documents : /^\d{7,14}$/,
    phones : /^\d{7,14}$/,
    dates: /^\d{4}(:|-)\d{2}/,
    hours: /^\d{2}:\d{2}\s?/
  }
  const validateField = (arg, type)=> {
    arg = arg.trim();
    let regex = patterns[type];
    if (arg === ""){
      return `${arg} is empty`
    }else{
      return regex.test(arg);
    }
  }

  const onInputChange = (({ target })=> {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: { value: value }
    })
  })

  return{
    ...formState,
    formState,
    onInputChange
  }
}
