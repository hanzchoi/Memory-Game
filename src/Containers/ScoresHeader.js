import React, { Component } from 'react';
import './CardsList.css';

class ScoresHeader extends Component {

  render(){
    return(
      <section className="score-panel">

        <button className="btn restart">
          <i className="fa fa-repeat"></i>
        </button>

        <div className="current-rate">
        </div>

        <ul className="star-rating">
          <li><i className="fa fa-star"></i></li>
          <li><i className="fa fa-star"></i></li>
          <li><i className="fa fa-star"></i></li>
        </ul>

        <div className="counter">
        </div>

        <button className="btn ratings">Show <br />
        ratings
        </button>

      </section>
    )
  }
}

export default ScoresHeader;
