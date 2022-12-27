import React, { useState } from 'react';

const UseStateWithFormValidation = () => {

    const [data, setData] = useState(
        {
            username: "",
            password: ""
        }
    );

    const eventFunction = (event) => {

        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }

        })



    }

    const submitData = () => {
        setData({});
    }

    return (
        <form class="form" onSubmit={(event) => event.preventDefault()}>
            <h2>LOGIN HERE</h2>
            <p type="Username:"><input type="text" placeholder="Write your name here.." name="username" value={data.username} onChange={eventFunction} /></p>
            <p type="Password:"><input type="password" placeholder="Write your password here..." name="password" value={data.password} onChange={eventFunction} /></p>
            <input type="button" value="Login" className='btn' onClick={submitData} />

            <div>
                            <span>Username:&nbsp;&nbsp;<b>{data.username}</b></span>
                            <br />
                            <br />
                            <span>Password:&nbsp;&nbsp;<b>{data.password}</b></span>
            </div>

            {/* {
                showData.map((val, index) => {
                    return (
                        <div key={index}>
                            <span>Username:&nbsp;&nbsp;<b>{val.username}</b></span>
                            <br />
                            <br />
                            <span>Password:&nbsp;&nbsp;<b>{val.password}</b></span>
                        </div>
                    )
                })
            } */}
        </form>
    )
}

export default UseStateWithFormValidation