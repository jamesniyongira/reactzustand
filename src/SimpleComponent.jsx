import React from 'react';
import create from 'zustand';

// Create a store using Zustand
const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));

const SimpleComponent = () => {
  const { count, increaseCount, decreaseCount } = useStore();

  return (
    <div>
      <h1>Simple Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

export default SimpleComponent;
