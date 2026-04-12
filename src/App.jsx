import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import useLocalStorage from "use-local-storage";
import { useState } from 'react';
import { PetDater } from './components/petDater';
import { Countdown } from "./components/Countdown";
import { OTPGenerator } from './components/generatePassword';
import { Appointment } from "./components/Appointments";

export const App = ()=> {
  const localValue = window.matchMedia("prefers-color-scheme: dark").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [appointments, setAppointments] = useState([]);
  //func that grab the current appointments and store the new appointments
  const newAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ]);
    console.log(appointments)
  }
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
          />))}
      </div>
    </div>
    <Footer></Footer>
  </div>);
}
