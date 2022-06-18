import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [city, setCity] = useState([])
  const api = {
    key: "c24bbfe6f119008bbdb9810f76b9bc86",
    base: "http://api.openweathermap.org/data/2.5/weather",
  }

  const search = evt => {
      fetch(`${api.base}?q=jakarta&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setCity(result)
        console.log(result);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {count}
          { (city.main != undefined) ? (
            <p>
              {city.main.temp}
            </p>
          ):('')}
        </p>
        <button onClick = {()=>setCount(count+1)}>
          +
        </button>
        <button onClick = {()=>setCount(count-1)}>
          -
        </button>
        <button onClick = {()=>setCount(0)}>
          clear
        </button>
        <button onClick = {search}>
          search
        </button>
      </header>
    </div>
  );
}

export default App;
