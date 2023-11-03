import React, { useContext } from 'react';
import { UserContext } from '../Context/userContext';
const SubChildComponent = () => {
    const data = useContext(UserContext);
    const { firstName, lastName, email } = data;
    return (
      <div>
        <h3>Sub Child Component</h3>
        <div>firstName:{firstName}</div>
        <div>lastName:{lastName}</div>
        <div>email:{email}</div>
      </div>
    );
};
export default SubChildComponent;
