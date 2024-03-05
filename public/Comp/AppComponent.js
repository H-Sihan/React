// AppComponent.js
import React from 'react';
import InputComponent from './InputComponent';
import GreetingComponent from './GreetingComponent';

function AppComponent({ title, defaultName }) {
  const [name, setName] = React.useState(defaultName);

  function updateState(name) {
    setName(name);
  }

  return (
    <div>
      <InputComponent title={title} passBackUserInput={updateState} />
      <GreetingComponent name={name} />
    </div>
  );
}

export default AppComponent;
