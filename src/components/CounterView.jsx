import { observer } from "mobx-react";

export const CounterView = observer(({ counter }) => (
  <div>
    <button onClick={() => counter.decrease()}>-</button>
    {counter.count}
    <button onClick={() => counter.increase()}>+</button>
  </div>
));
