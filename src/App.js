import "./styles.css";

import { CounterView } from "./components";
import { counter } from "./CounterStore";

export default function App() {
  return (
    <div className="App">
      <CounterView counter={counter} />
    </div>
  );
}
