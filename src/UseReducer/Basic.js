import React, { useReducer } from "react";
const Reducer = (state, action) => {
  if (action.type === "Delete") {
    const newData = state.data.filter((obj) => {
      return obj.id !== action.payload;
    });
    return {
      ...state,
      data: newData,
      length: state.length - 1,
    };
  }
  return state;
};
const Basic = () => {
  const InitialState = {
    data: [
      { id: "234", name: "Rupesh", email: "test@example.com" },
      { id: "345", name: "Emma", email: "emma@example.com" },
    ],
    length: 2,
  };
  const [state, dispatcher] = useReducer(Reducer, InitialState);
  const handleDelete = (id) => {
    dispatcher({
      type: "Delete",
      payload: id,
    });
  };
  return (
    <div>
      <h1>Use Reducer</h1>
      <h1>Number of Users:{state.length}</h1>
      {state.data.map((obj) => {
        const { id, name, email } = obj;
        return (
          <div key={id}>
            <div> name:{name}</div>
            <div>email:{email}</div>
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Basic;
