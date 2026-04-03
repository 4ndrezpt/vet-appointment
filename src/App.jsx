import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import useLocalStorage from "use-local-storage";
import { useState } from 'react';
import { PetDater } from './components/petDater';
import { Countdown } from "./components/Countdown";


export const App = ()=> {
  const localValue = window.matchMedia("prefers-color-scheme: dark").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  return (
    <div className="App"
      data-theme={isDark ? "dark":"light"}
    >
    <Navbar
      isChecked={ isDark }
      handleChange={()=> setIsDark(!isDark)}
    ></Navbar>
    <h3>Administrador de citas de pacientes</h3>
    <Countdown duration={ 30 * 24 * 60 * 60 * 1000}/>
    <PetDater></PetDater>
    <Footer></Footer>
  </div>);
}
