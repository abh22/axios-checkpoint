
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import UserList from './UserList';



function App() {
  const[users,setUsers]=useState([]);
  const getUsers=()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
  setUsers(res.data);
})
.catch((err)=>console.log(err));
  }
  useEffect(() => {
   getUsers();
  
   
  }, []);
  
  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
