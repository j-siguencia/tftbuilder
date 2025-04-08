import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={`r1-${i}`} />
        ))}
      </div>
      <div className="container offset">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={`r2-${i}`} />
        ))}
      </div>
      <div className="container">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={`r3-${i}`} />
        ))}
      </div>
      <div className="container offset">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={`r2-${i}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
