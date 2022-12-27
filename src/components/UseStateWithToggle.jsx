import React, { useState } from 'react';

const UseStateWithToggle = () => {
    const [name, setName] = useState(false);

    const Toggle = () => {
        setName(!name);
    }

    return (
        <>
            <h1>{name ? "Hammad Tariq" : "Hammad"}</h1>
            <button onClick={Toggle}>Click here</button>
        </>

    );

}
export default UseStateWithToggle;