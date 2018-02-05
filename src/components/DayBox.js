import React from 'react';

function DayBox(props) {
  return (
    <div className="daybox">
      <i className="wi wi-day-sunny"></i>
      <h3>{props.day}</h3>
      High:{props.high}&deg;<br/>
      Low:{props.low}&deg;
    </div>
  );
}

export default DayBox;
