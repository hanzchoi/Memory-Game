import React from 'react';

const TimerDisplay = ({time}) => {
  return (
    <div className="counter">
        <span>Time <i className="fa fa-hourglass-half" title="Time"></i>
        </span><span className="displayTime">{time}</span>
    </div>
  )

}

export default TimerDisplay;
