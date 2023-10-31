import React, { useState } from 'react';

const State = () => {
    const [obj, setData] = useState({
        firstName: 'Emma',
        lastName: 'Watson',
        age: '27'
    });
    const ChangeFirstName = () => {
        setData(
            {
                ...obj,
                firstName: 'Rupesh'
            }  
        )
    }
    const ChangeLastName = () => { 
        setData(
            {
                ...obj,
                lastName: 'Reddy'
            }
        )
    }
    const changeAge = () => { 
        setData(
            {
                ...obj,
                age: 22
            }
        )
    }
    return (
        
        <div>
            <h1>First Name is {obj.firstName}</h1>
            <button onClick={ChangeFirstName}>Change First Name</button>
            <h2>Last Name {obj.lastName}</h2>
            <button onClick={ChangeLastName}>Change Last Name</button>
            <h3>Age is {obj.age}</h3>
            <button onClick={changeAge}>Change Age</button>
        </div>
    );
}
export default State;