import React from 'react';
import './App.css';


function DayBox(props) {
  return <li><strong>{props.day}</strong><br/>High:{props.high}&deg; | Low:{props.low}&deg; </li>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Weather</h1>
      </header>
      <ul>
        <DayBox day="Monday" high="25" low="14" />
        <DayBox day="Tuesday" high="28" low="12"/>
        <DayBox day="Wednesday" high="21" low="9"/>
        <DayBox day="Thursday" high="26" low="11"/>
        <DayBox day="Friday" high="22" low="13"/>
        <DayBox day="Saturday" high="19" low="8"/>
        <DayBox day="Sunday" high="23" low="23"/>
      </ul>
    </div>
  );
}

export default App;
