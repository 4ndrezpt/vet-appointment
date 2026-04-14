import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import useLocalStorage from "use-local-storage";
import { useState, useEffect } from 'react';
import { PetDater } from './components/petDater';
import { Countdown } from "./components/Countdown";
import { OTPGenerator } from './components/generatePassword';
import { Appointment } from "./components/Appointments";

export const App = ()=> {
  const localValue = window.matchMedia("prefers-color-scheme: dark").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  let initialAppointments = !localStorage.getItem('appointments') ? [] : JSON.parse(localStorage.getItem('appointments'));
  const [appointments, setAppointments] = useState(initialAppointments);
  //func that grab the current appointments and store the new appointments
  const newAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ]);
    //console.log(appointments)
  }
  //onClick to delete appointment individually
  const deleteAppointment= (id)=>{
    console.log("cita: ", id)
    const remainAppointments = appointments.filter(appointment=>appointment.id.value !==  id.value);
    setAppointments(remainAppointments);
  }
  useEffect(()=>{
    console.log(initialAppointments);
    //save apppintmentts in local storage
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  },[appointments])
  return (
    <div className="App"
      data-theme={isDark ? "dark":"light"}
    >
    <Navbar
      isChecked={ isDark }
      handleChange={()=> setIsDark(!isDark)}
    ></Navbar>
    <Countdown duration={ 30 * 24 * 60 * 60 * 1000}/>

    <h1>Administrador de citas de Mascotas</h1>
      <div className="section__and__container">
      <PetDater
        onSave={newAppointment}
        className="injector"
      ></PetDater>
      <div className="viewer">
        {appointments.map(appointment => (<Appointment
          key={appointment.id}
          appointment={appointment}
          deleteAppointment={deleteAppointment}
          />))}
      </div>
    </div>
    <Footer></Footer>
  </div>);
}
