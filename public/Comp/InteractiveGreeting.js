import React from 'react';

function InteractiveGreeting() {

    const [name,setName] = React.useState("No name");

    return(
        <div>
        <h2>Enter your name</h2>
        <input id='txtName' type='text' value={name} onChange={updateStateName} />
        <div id='hello'>Hello {name}</div>
        <input type='button' value='update' onClick={updateStateName} />
        </div>
    );

    function updateStateName() {
        setName(document.getElementById('txtName').value);
    }
}

export default InteractiveGreeting;
