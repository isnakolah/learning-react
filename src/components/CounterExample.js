import React, { useState } from "react";

const CounterExample = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button>
        <h1 onClick={() => setCount(count + 1)}>plus</h1>
      </button>
      <button>
        <h1 onClick={() => setCount(count - 1)}>minus</h1>
      </button>
    </div>
  );
};

export default CounterExample;
