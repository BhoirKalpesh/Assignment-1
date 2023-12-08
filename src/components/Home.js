import React, { useState, useEffect } from 'react';
import './home.css';
import { CircularProgress, CircularProgressLabel, Button } from '@chakra-ui/react';
import { AiOutlinePauseCircle, AiOutlinePlayCircle, AiOutlineReload } from "react-icons/ai";

function Home() {
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isWorkSession, setIsWorkSession] = useState(true); 


  const handleWorkSessionClick = () => {
    
    if (!isWorkSession) {
      setIsWorkSession(true);
      setMinutes(25);
      setSeconds(0);
      setProgress(0);
      setIsActive(false); 
    }
  };

  const handleBreakSessionClick = () => {
   
    if (isWorkSession) {
      setIsWorkSession(false);
      setMinutes(5);
      setSeconds(0);
      setProgress(0);
      setIsActive(false); 
    }
  };

  useEffect(() => {
    let interval;
    const totalTime = isWorkSession ? 25 * 60 : 5 * 60; 

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setProgress(0);
            setIsActive(false);

           
            setIsWorkSession((prevIsWorkSession) => !prevIsWorkSession);
            setMinutes(isWorkSession ? 5 : 25);
          } else {
            setSeconds(59);
            setMinutes((prevMinutes) => prevMinutes - 1);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
          const totalSeconds = minutes * 60 + seconds;
          const calProgress = ((totalTime - totalSeconds) / totalTime) * 100;
          setProgress(calProgress);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isWorkSession, minutes, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setProgress(0);
    setIsWorkSession(true);
    setMinutes(25);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div>
            <div className='session'>

          <Button onClick={handleWorkSessionClick} colorScheme='teal' fontSize='14px'>
            Work Session
          </Button>
          <Button onClick={handleBreakSessionClick} colorScheme='teal' ml='5' fontSize='14px'>
            Break Session
          </Button>
            </div>
      <div className='content'>
        <div>
          <CircularProgress value={progress} color='green.400' size='160px' thickness='4px'>
            <CircularProgressLabel color='white'>{formatTime(minutes)}:{formatTime(seconds)}</CircularProgressLabel>
          </CircularProgress>
        </div>
        <Button onClick={startTimer} colorScheme='green'><AiOutlinePlayCircle style={{ fontSize: '30px' }} /></Button>
        <Button onClick={stopTimer} colorScheme='red'><AiOutlinePauseCircle style={{ fontSize: '30px' }}/></Button>
        <Button onClick={resetTimer} colorScheme='blue'><AiOutlineReload style={{ fontSize: '30px' }}/></Button>
      </div>
      {isWorkSession ? (
            <h3 style={{ color: 'black', fontSize: '25px', margin:'20px' }}>Time to Focus...!</h3>
          ) : (
            <h3 style={{ color: 'black', fontSize: '25px' , margin:'20px' }}>Time for a break...!</h3>
          )}
    </div>
  );
}
export default Home;
