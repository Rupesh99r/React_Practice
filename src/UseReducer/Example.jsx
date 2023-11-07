import React, { useReducer, useEffect,useState } from 'react';
const reducer = (state, action) => {
    if (action.type === 'Update_Data') { 
        return {
            ...state,
            userData: action.payload
        }
    }
    if (action.type === 'Loading') { 
        return {
            ...state,
            isLoading: action.payload
        }
    }
    if (action.type === 'Error') {
        return {
            ...state,
            isError: action.payload
        }
    }
    if (action.type === 'Delete') { 
        const newData = state.userData.filter((obj) => {
            return obj.id !== action.payload;
        })
        return {
            ...state,
            userData: newData
        }
    }
    if (action.type === 'Edit') {
        
        return {
            ...state,
            isEditing: action.payload
        }
    }
    if (action.type === 'Update_Users') { 
        const newData = state.userData.map((obj) => {
            if (obj.id === action.payload.id) {
                return {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                }
            }
            
                return obj;
            
        });
        return {
            ...state,
            userData: newData
        }
    }
    return state;
}

const Basic = () => {
    const initialState = {
        userData: [],
        isLoading: false,
        isError: { status: false, msg: '' },
        isEditing:{status:false,id:'',name:'',email:''}
    };
    useEffect(() => {
        FetchData("https://jsonplaceholder.typicode.com/users")
    },[]);
    const FetchData = async (url) => {
        dispatch({ type: "Loading", payload: true });
        dispatch({ type: "Error", payload: { status:false,msg:'' } });
        try {
            const response = await fetch(url);
        const data = await response.json();
            dispatch({ type: "Update_Data", payload: data });
            dispatch({ type: "Loading", payload: false }); 
            dispatch({ type: "Error", payload: { status:false,msg:'' } });
        } catch (error) {
            dispatch({ type: "Loading", payload: false });
            dispatch({ type: "Error", payload: { status: true, msg: error.message } });
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const updateData1 = (id,name,email) => {
        dispatch({ type: 'Update_Users', payload: { id, name, email } });
        dispatch({type:'Edit', payload: {status:false,id:id,name,email} });
    }

    const HandleDelete = (id) => {
        dispatch({ type: 'Delete', payload: id });
    }
    if (state.isLoading) {
        return <h1>Loading .....</h1>
    }
    if (state.isError.status) {
        return <h1 style={{color:'red'}}>Error .....{ state.isError.msg}</h1>
    }
    
    return (<div >
        <h2>User Information</h2>
        {state.isEditing?.status && (<EditFrom
            id={state.isEditing.id}
            name={state.isEditing.name}
            ComingEmail={state.isEditing.email}
            updateData1={updateData1} />)}
        {
            state.userData.map((obj) => {
                const {id,name,email } = obj;
                return (
                    <div key={id} style={{ background:"Lightgreen"}}>
                        <h3>name:{name}</h3>
                        <p>email:{email}</p>
                        
                        <button onClick={()=>dispatch({type:'Edit',payload:{status:true,id:id,name:name,email}})}>update   </button>
                        <button onClick={()=>HandleDelete(id)}>delete</button>
                    </div>
                )
            })
        }
    </div>);

}
const EditFrom = ({ id, name, ComingEmail, updateData1 }) => {
  const [title, setTitle] = useState(name || "");
  const [email, setEmail] = useState(ComingEmail || "");
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
              <button onClick={() => updateData1(id, title, email)}>
                  Update Data
              </button>
      </form>
    </>
  );
};



export default Basic;