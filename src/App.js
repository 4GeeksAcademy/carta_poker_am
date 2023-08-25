import PokerCard from "./components/PokerCard";
import "./App.css";

const pintas = ["♦", "♥", "♠", "♣"];
const values = [
  "K",
  "Q",
  "J",
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];

const pinta = pintas[parseInt(Math.random() * pintas.length)];
const value = values[parseInt(Math.random() * values.length)];

function App() {
  return (
    <div className="App">
      <PokerCard pinta={pinta} value={value} />
    </div>
  );
}

export default App;
