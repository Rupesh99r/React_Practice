import React from 'react';
const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com'
};
export const UserContext = React.createContext();

export  const UserContextProvider = ({ children }) => {
    return (
        <UserContext.Provider value={initialState}>{children} </UserContext.Provider>
    );
}