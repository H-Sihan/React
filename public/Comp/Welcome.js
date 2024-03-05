import React from 'react'; // must include in all components

function Welcome({name, age, color}) {
  const tileStyle = {
    backgroundColor: color // Use the color prop to set the background color
  };
  return <h1 style={tileStyle}>I'm {name} and my age is {age}</h1>
}

export default Welcome; // export the function so we can import it from the index.js