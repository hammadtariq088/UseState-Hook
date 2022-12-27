import React, { useState } from 'react';

const UseStateWithArray = () => {

    const DATA = [
        {
            id: 0,
            name: "Hammad",
            age: 22

        },
        {
            id: 1,
            name: "Ali",
            age: 23

        },
        {
            id: 2,
            name: "Ahmed",
            age: 24

        },
    ];

    const [data, setData] = useState(DATA);

    const Remove = (id) => {

        const result = data.filter((val) => {
            return val.id !== id;
        })

        setData(result);
    }

    return (
        <>
            {
                data.map((val) => {
                    return (
                        <div class="section" key={val.id} >
                            <h1>Name = {val.name} and Age = {val.age}</h1>
                            <button onClick={() => Remove(val.id)} >Remove</button>
                        </div>
                    )
                })
            }
            <button onClick={()=> setData([])}>Clear</button>
        </>
    );

}
export default UseStateWithArray;