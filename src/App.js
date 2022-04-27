
import './App.css';
import Dictionary from'./Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Dictionary</h1>
      <h3>Which word would you like to look up?</h3>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>coded by XY, open-sourced on GitHub, hosted on Netlify</footer>
    </div>
  );
}

export default App;
