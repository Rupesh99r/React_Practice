import React, { useState, useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/users";
const Effect = () => {
    const [userdata, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({status:false,msg:""});
    const fetchData = async (apiUrl) => {
        setLoading(true);
        setIsError({status:false,msg:""});
        try {
            const data = await fetch(apiUrl);
            const data1 = await data.json();

            setUserData(data1);
            setLoading(false);
            setIsError({ status: false, msg: "" });
            if (data.status === 404) {
                throw new Error("data not found");
            }
        } catch (error) {
            setLoading(false);
            setIsError({ status: true, msg: error.message || "Something went wrong,pls try again" });
        }
       
       
    }
    useEffect(() => {
        fetchData(url);
    }, []);
    if (loading) {
        return (
            <div >
                <h1>Loading...</h1>
            </div>
        )
    }
    if (isError?.status) {
        return (
            <div >
                <h2 style={{color: "red"}}>{ isError.msg}</h2>
            </div>
        )
    }
    return (
      <div>
            <h1>Use Effect</h1>
            <ul>
                {userdata.map((obj) => {
                    const { id, name, email } = obj;
                    return (
                        <li key={id}>
                            <div > {name}</div>
                            <div>{ email}</div>
                        </li>
                    )
                })}
            </ul>
      </div>
    );
};
export default Effect;