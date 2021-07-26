import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">dic·tion·ar·y</header>
        <span className="subtitle">
          <em>
            "By words we learn thoughts, and by thoughts we learn life" -Jean
            Baptiste Girard, French-Swiss Educator
          </em>
        </span>
        <main>
          <Dictionary defaultKeyword="wander" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/khensley2592/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code&nbsp;
          </a>
          by Katie Hensley
        </footer>
      </div>
    </div>
  );
}
