import React from 'react';

const App = (props) => {
  const { name, age } = props;
  const heading = <h1>Hello, {name}, your age is {age}</h1>;

  const sum = (x, y) => x + y; // define an arrow function to add two numbers

  return (
    <div>
      {heading}
      <h2> One plus one is {sum(1, 1)} ! </h2>
      <h2> You {age >= 18 ? "can" : "cannot"} vote! </h2>
    </div>
  );
};

export default App;