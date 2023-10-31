import React, { useState } from 'react';

const State = () => {
    const initailArr = [
        { id: 'abc', name: 'Rupesh', lName: 'Reddy', age: 22 },
        { id: 'abcs', name: 'Vasu', lName: 'M', age: 21 },
        { id: 'hjbdj', name: 'Avinash', lName: 'Reddy', age: 22 }
    ]
    const [data, SetData] = useState(initailArr);
    const HandleDelete = (id) => {
        SetData(
            data.filter((eachdata) => { return eachdata.id !== id })
        )
    }
    return (
        <div>
            < ul >
                {data.map((EachObj) => {
                    const { id, name, age, lName } = EachObj;
                    return (
                        <li key={id}>
                            <div> Name <strong>{name}</strong></div>
                            <div>Last Name <strong>{lName}</strong></div>
                            <div>Age <strong>{age}</strong></div>
                            <button onClick={() => HandleDelete(id)}>delete me</button>
                        </li>
                    )
                }
                )}

            </ul ></div>
    )

}
export default State;