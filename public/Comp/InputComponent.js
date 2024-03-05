// InputComponent.js
import React, { useState } from 'react';

function InputComponent({ title, passBackUserInput }) {
  const [inputValue, setInputValue] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  function updateName(event) {
    const n = event.target.value;
    setInputValue(n);
    passBackUserInput(n);
  }

  function handleSubmit() {
    passBackUserInput(inputValue);
    setSubmittedData([...submittedData, inputValue]);
    setInputValue('');
  }

  return (
    <div>
      <h1>{title}</h1>
      <fieldset>
        <input type='text' id='name' value={inputValue} onChange={updateName} />
        <button type='button' onClick={handleSubmit}>Submit</button>
      </fieldset>
      <div>
        <p>Submitted Value:</p>
        <ul>
          {submittedData.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InputComponent;
