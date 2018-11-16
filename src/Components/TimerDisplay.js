import React from 'react';

const TimerDisplay = (props) => {
  let time = document.querySelector('.displayTime');
  let startGame = 0;
  let gameInterval;

  //Timer inspired by https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
  function timer() {
      let minutes = 0;
      let seconds = 0;
      gameInterval = setInterval(function () {
          seconds = parseInt(seconds, 10) + 1;
          minutes = parseInt(minutes, 10);
          if (seconds >= 60) {
              minutes += 1;
              seconds = 0;
          }

          seconds = seconds < 10 ? "0" + seconds : seconds;
          minutes = minutes < 10 ? "0" + minutes : minutes;

          //time.innerHTML = minutes + ":" + seconds;
          //lastTime.textContent = time.textContent;
          // console.log(time,"hellooooo are you there????");
      }, 1000);
  }

  return (

    <div className="counter">
      {console.log(time)}
        <span>Time <i className="fa fa-hourglass-half" title="Time"></i>
        </span><span className="displayTime">{timer()}</span>
    </div>
  )

}

export default TimerDisplay;
