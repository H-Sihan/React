import React from 'react';
import ReactDOM from 'react-dom/client';

import TodoComponent from './Comp/TodoComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appProps = {
    name: "Sihan",
    age: 17,
  };

const welcomeProps = {
    name: "Sihan",
    age: 17,
    color: "Black"
};
root.render(
    <>
      <InteractiveGreeting/>
      <TodoComponent title="My Custom Todo List Title" />
      <AppComponent title="My App Title" defaultName="Default Name" />
    </>,
  );