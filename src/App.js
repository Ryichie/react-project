import miku from './mikuheart.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <b>Hey, I'm Richard!</b>
        <p>It's nice to meet you.</p>
        <img src={miku} className="miku-cute" alt="miku" width={500}/>
      </header>
    </div>
  );
}

export default App;
