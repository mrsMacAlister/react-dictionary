import './App.css';
import Dictionary from'./Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <h3>Which word would you like to look up?</h3>
        </header>
        <main>
          <Dictionary defaultKeyword="ocean" />
        </main>
        <footer>Coded by <a href="https://github.com/mrsMacAlister" target="_blank" rel="noreferrer">mrs. MacAlister</a>, open-sourced on GitHub, hosted on Netlify</footer>
      </div>
    </div>
  );
}

export default App;
