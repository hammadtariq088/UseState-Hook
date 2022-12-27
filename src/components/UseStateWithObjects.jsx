import React, { useState } from 'react';

const UseStateWithObjects = () => {

    const [bioData, setBioData] = useState(
    {
        name: "Hammad",
        age: 22,
        profession: "coder",
    });

    const Update = () => {
        setBioData((val) => {
            return {
                ...val,
                name: "Hammad Tariq"
            }
        });
    }

    return (
        <>
            <h1>Name = {bioData.name}, Age = {bioData.age}, Profession = {bioData.profession}</h1>
            <button onClick={Update}>update</button>
        </>

    );

}
export default UseStateWithObjects;