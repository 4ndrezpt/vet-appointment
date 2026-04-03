import { useForm }  from '../lib/hooks/useForm.js';
import { useState,useEffect } from 'react';

export const PetDater = () => {
const initialForm = {
  id : crypto.randomUUID(),
  ownerName: {value: "",isValid:false},
  ownerDocument : {value: "",isValid:false},
  petName: {value: "",isValid:false},
  petType: {value: "",isValid:false},
  petRace : {value: "",isValid:false},
  petCode : {value: "",isValid:false},
  date : {value: "",isValid:false},
  hour : {value: "",isValid:false},
  syntomps : {value: "",isValid:false}
}
const { formState, onInputChange } = useForm(initialForm);

const { id, ownerName, ownerDocument,
    petName, petType, petRace,
    petCode, date, hour, syntomps } = formState;

  const [error, setError] = useState(false);

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
  arg = arg.value.trim();
  let regex = patterns[type];
  if (arg === ""){
    return `${arg} is empty`
  }else{
    return regex.test(arg);
  }
}
const validateForm = (inputs, types) => {
  const results = []
  for (let i = 0; i < inputs.length; i++){
    results.push(validateField(inputs[i], types[i]));
  }
  return results;
}
const handleKeyUp = (value, type) => {
  if (value.value == ""){ return; }
  setTimeout(()=>{
    value.isValid = validateField(value, type)
    console.log(value);
  }, 1500)
}
const handleSubmit = (e)=> {
    e.preventDefault();
    //validar Information
  let inputs = [ownerName, ownerDocument, petName, petType, petRace, petCode, date, hour, syntomps]
  let types = ['names', 'documents', 'names','names','names', 'codes','dates','hours','minTexts']
  console.log(validateForm(inputs, types))
    // aasignar uniqueId

  console.log(formState.id);
    // instanciar la cita

    // reiniciar el formulario
  }

  useEffect(()=>{

  },[formState]);

  return (<section>
    <form onSubmit={ handleSubmit }>
      <h3>Cita Veterinaria</h3>
      {error ? <h5 className="error">El formulario es incorrecto</h5> : ''}
      <fieldset>
        <legend>Owner Information</legend>
        <label htmlFor="ownerName">Owner Name: </label>
        <input type="text" id="ownerName" name="ownerName"
        value={ ownerName.value }
        onChange={ onInputChange }
        onKeyUp={handleKeyUp(ownerName, 'names')}
        placeholder="John Doe..."
        />
        <label className={ ownerName.value !== '' && ownerName.isValid == false ? "error" : "hidden"}
          >El nombre debe tener al menos 3 letras</label>
        <label htmlFor="ownerDocument">Owner Document: </label>
        <input type="text" id="ownerDocument" name="ownerDocument"
        value={ ownerDocument.value }
        onChange={onInputChange}
        onKeyUp={handleKeyUp(ownerDocument, 'documents')}
        placeholder="23525..."
        />
        <label className={ ownerDocument.value !== '' && ownerDocument.isValid == false ? "error" : "hidden"}
        >El documento debe contener al menos 6 caracteres</label>
      </fieldset>
      <fieldset>
        <legend>Pet Information</legend>
        <label htmlFor="petName">Pet Name: </label>
        <input type="text" id="petName" name="petName"
        value={ petName.value }
        onChange={onInputChange}
        onKeyUp={handleKeyUp(petName, 'names')}
        placeholder="Logan..."
        />
        <label className={ petName.value !== '' && petName.isValid == false ? "error" : "hidden"}
        >El nombre debe tener al menos 3 letras</label>
        <label htmlFor="petType">Pet type: </label>
        <input type="text" id="petType" name="petType"
        value={ petType.value }
        onChange={ onInputChange }
        onKeyUp={handleKeyUp(petType, 'names')}
        placeholder="dog, cat, bird, fish"
        />
        <label className={ petType.value !== '' && petType.isValid == false ? "error" : "hidden"}
        >El nombre debe tener al menos 3 letras</label>
        <label htmlFor="petRace">Pet Race: </label>
        <input type="text" id="petRace" name="petRace"
        value={ petRace.value }
        onChange={ onInputChange }
        onKeyUp={handleKeyUp(petRace, 'names')}
        placeholder="doberman, siames, french puddle"
        />
        <label className={ petRace.value !== '' && petRace.isValid == false ? "error" : "hidden"}
        >El nombre debe tener al menos 3 letras</label>
        <label htmlFor="petCode">Pet Code: </label>
        <input type="text" id="petCode" name="petCode"
        value={ petCode.value }
        onChange={ onInputChange }
        onKeyUp={handleKeyUp(petCode, 'codes')}
        placeholder="3525, 2523525 ..."
        />
      </fieldset>
      <fieldset>
        <legend>Date Information: </legend>
      <label htmlFor="date">Date: </label>
      <input type="date" id="date" name="date"
      value={ date.value }
      onChange={onInputChange}
      onKeyUp={handleKeyUp(date, 'dates')}
      />
      <label htmlFor="time">Hour: </label>
        <input  type="time" id="hour" name="hour"
        value={ hour.value }
        onChange={onInputChange}
        onKeyUp={handleKeyUp(hour, 'hours')}
      />
      </fieldset>
      <fieldset>
        <legend>Síntomas</legend>
        <label>Describe los síntomas de tu mascota: </label>
        <textarea cols="20" rows="5"
          id="syntomps" name="syntomps"
          value={ syntomps.value }
          onChange={ onInputChange }
          onKeyUp={handleKeyUp(syntomps, 'minTexts')}
          placeholder="very sick ..."
        ></textarea>
        <label className={ syntomps.value !== '' && syntomps.isValid == false ? "error" : "hidden"}
        >El nombre debe tener al menos 3 letras</label>
      </fieldset>
      <button type="submit">Enviar</button>
    </form>
  </section>);
}
