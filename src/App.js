import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const App = () => {
  const [baban, setBaban] = useState("baban");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {baban}
        </p>
        <a
          onClick={() => setBaban("BABAAAN!")}
          className="App-link"
          href="#"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
