import React, { Component } from 'react';
// import './CardsList.css';

class ScoresHeader extends Component {
  state = {
    time: "00:00"
  }

  timer = () => {
    let mins = 0;
    let secs = 0;
    setInterval(() => {
        secs = parseInt(secs, 10) + 1;
        mins = parseInt(mins, 10);
        if (secs >= 60) {
            mins += 1;
            secs = 0;
        }

        secs = secs < 10 ? "0" + secs : secs;
        mins = mins < 10 ? "0" + mins : mins;
        this.setState({
          time: `${mins}:${secs}`
        })
        //time.innerHTML = mins + ":" + secs;
        //console.log(time,"timer");
    }, 1000);
  }
  
  render(){
    return(
      <section className="score-panel">

          <button className="btn restart">
              <i className="fa fa-repeat"></i>
          </button>

          <div className="current-rate">
              <div className="counter"></div>
              <span>Move(s) </span><span className="moves">0</span>
          </div>

          <ul className="star-rating">
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star"></i></li>
          </ul>

          <div className="counter">
              <span>Time <i className="fa fa-hourglass-half" title="Time"></i>
              </span><span className="displayTime">{this.state.time}</span>
          </div>

          <button className="btn ratings">Show <br /> ratings</button>

      </section>
    )
  }
}

export default ScoresHeader;
