import { useFormId } from "../lib/hooks/useFormId";

export const PetDater = ({ onSave }) => {
  const initialState = {
    id : {value: crypto.randomUUID(), isValid: true},
    name : {value: "", isValid: null},
    email : {value: "", isValid: null},
    petName : {value: "", isValid: null},
    typeName : {value: "", isValid: null},
    raceName : {value: "", isValid: null},
    date : {value: "", isValid: null},
    hour : {value: "", isValid: null},
    description : {value: "", isValid: null}
  }

  const { formState, handleChange, handleSubmit} = useFormId(initialState, onSave)
  const { id, name, email, petName, typeName, raceName, date, hour, description } = formState;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Appointment Form</h4>
        <fieldset>
          <legend>Owner Info:</legend>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name"
          value={name.value}
          onChange={handleChange}
          />
          {name.value == "" ? "" : name.isValid ? "":
            <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
          <label htmlFor="name">Email: </label>
          <input type="email" id="email" name="email"
          value={email.value}
          onChange={handleChange}
          />
          {email.value == "" ? "": email.isValid ? "" :
            <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
        </fieldset>
        <fieldset>
          <legend>Pet Info</legend>
          <label htmlFor="petName">Pet Name: </label>
          <input type="text" id="petName" name="petName"
          value={petName.value}
          onChange={handleChange}
          />
          {petName.value == "" ? "" : petName.isValid ? "":
            <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
          <label htmlFor="typeName">Pet Type: </label>
          <input type="text" id="typeName" name="typeName"
          value={typeName.value}
          onChange={handleChange}
          />
          {typeName.value == "" ? "" : typeName.isValid ? "":
            <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
          <label htmlFor="raceName">Pet Race: </label>
          <input type="text" id="raceName" name="raceName"
          value={raceName.value}
          onChange={handleChange}
          />
          {raceName.value == "" ? "" : raceName.isValid ? "":
            <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
        </fieldset>
        <fieldset>
          <legend>Appointment Info: </legend>
          <label htmlFor="date">Appointment Date: </label>
          <input type="date" id="date" name="date"
          value={date.value}
          onChange={handleChange}
          />
          {date.value == "" ? "" : date.isValid ? "":
            <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
          <label htmlFor="hour">Appointment Hour: </label>
          <input type="time" id="hour" name="hour"
          value={hour.value}
          onChange={handleChange}
          />
          {hour.value == "" ? "" : hour.isValid ? "":
            <p style={{ backgroundColor: "darkred" }}>This Element contain errors</p>}
        </fieldset>
        <fieldset>
          <legend>Syntomps</legend>
          <label htmlFor="date">Syntomps description: </label>
          <textarea name="description" id="description" rows="5" cols="10"
            value={description.value}
            onChange={handleChange}
          ></textarea>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
