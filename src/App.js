import React from 'react';
import DayBox from './components/DayBox';
import './css/App.css';
import './css/weather-icons.min.css';


let initialState = [
    {
      day : 'Monday',
      high : '25',
      low : '14'
    },
    {
      day : 'Tuesday',
      high : '28',
      low : '12'
    },
    {
      day : 'Wednesday',
      high : '29',
      low : '16'
    },
    {
      day : 'Thursday',
      high : '23',
      low : '13'
    },
    {
      day : 'Friday',
      high : '20',
      low : '9'
    },
    {
      day : 'Saturday',
      high : '18',
      low : '8'
    },
    {
      day : 'Sunday',
      high : '12',
      low : '4'
    }
  ];

function App() {
  let DayBoxes = initialState.map(data => {
    return (
      <DayBox key={data.day} day={data.day} high={data.high} low={data.low} />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Weather</h1>
      </header>
      <div>
        {DayBoxes}
      </div>
    </div>
  );
}

export default App;
