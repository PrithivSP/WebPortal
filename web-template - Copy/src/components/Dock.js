import React, { useEffect, useState } from 'react'
import oldComputerImage from '../assets/old-computer.png'
import './style/Dock.css'
import ThemeChange from './ThemeChange';
import Weather from './Weather';

function Dock({onDivClick}) {
    let [currentTime, setCurrentTime] = useState(new Date());
    useEffect(()=>{
        let timeId = setInterval(()=>tick(), 1000);

        return () =>{
            clearInterval(timeId);
        }
    }, []);
    function tick() {
        setCurrentTime(new Date());
    }
  return (
    <div className='dock-wrapper'>
        <div className="left">
            <button onClick={onDivClick}>
                <img src={oldComputerImage} alt="" />
            </button>
        </div>

        <div className="right">
            <div className="weather-cont">
                <Weather />
            </div>
            <div className="themeChange">
                <ThemeChange />
            </div>
            <div className="time-cont">
                {currentTime.toLocaleTimeString()}
                <br />
                {currentTime.toLocaleDateString()}
            </div>
        </div>
    </div>
  )
}

export default Dock