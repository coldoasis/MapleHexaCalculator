import './App.css';
import myImage from './6thjob.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {myImage} className="Six-JobLogo" alt="sixjob" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
