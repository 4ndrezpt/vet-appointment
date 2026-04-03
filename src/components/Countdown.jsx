import { useState, useEffect } from "react";

export const Countdown = ({ duration }) => {
  const [count, setCount] = useState(duration);

  function getRandomKey(){
    const keys = []
    let getRandom = Math.floor(Math.random() * 100);
    for (let i = 0; i < 6; i++){
      keys.push(getRandom);
    }
    return keys;
  }
  function getFormattedCount(count){
    let total_seconds = parseInt(Math.floor(count / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let total_days = parseInt(Math.floor(total_hours / 24));

    //residue is the output we are looking for
    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);
    let counter = {
      days : total_days,
      hours : hours,
      minutes : minutes,
      seconds: seconds
    }
    return counter;

  }
  useEffect(() => {
    setTimeout(()=>{
      setCount(count - 1000);
    }, 1000)

  }, [count]);
  let counter = 0;
  const formatted = Object.values(getFormattedCount(count)).map((time) => (
    <li key={ `${time}${counter++}"key"`}>{ time }</li>
  ));

  return (
    <div className="countDown">
      <ul>
        {formatted}
      </ul>
    </div>
  );
}
