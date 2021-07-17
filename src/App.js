import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">dic·tion·ar·y</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Katie Hensley</footer>
      </div>
    </div>
  );
}
