import React from "react";
import "./styles.css";

const MyContext = React.createContext({
  counter: 0,
  setCounter: () => null
});

const Hello = () => {
  return (
    <div>
      <p>Hello {Math.random()}</p>
    </div>
  );
};

const World = () => {
  const { counter } = React.useContext(MyContext);
  return (
    <div>
      <p>World ~ {counter}</p>
    </div>
  );
};

const Button = () => {
  const { setCounter } = React.useContext(MyContext);
  return <button onClick={() => setCounter()}>Click</button>;
};

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <MyContext.Provider
      value={{
        counter,
        setCounter: () => setCounter(counter + 1)
      }}
    >
      <div className="App">
        <h1>React Context Demo</h1>
        <Hello />
        <World />
        <Button />
      </div>
    </MyContext.Provider>
  );
}
