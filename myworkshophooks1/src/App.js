
// //les bas react hooks
// import { useState } from 'react';
// import './App.css';
// function App() {
//   const [count,setcount]=useState(0);
//   const [students,setstudents]=useState(["Racha"]);
//   const [student,setstudent]=useState('');
//   // console.log(useState(0)[0])
//   // console.log(useState(0)[1])
//    const handleIncrement=()=>{
//     setcount(count+1)
//   }
//   const handledecrement=()=>{
//     if(count>0){setcount(count-1)}
    
//   }
//   const handlechange=(event)=>{
//     setstudent(event.target.value);
//   }
//   const handlesubmit=(e)=>{e.preventDefault();
// setstudents([...students,student]);
// setstudent("");
//   }
//     return (
//     <div className="App">
//     <button onClick={handleIncrement}>+</button>
//     <h1>{count}</h1>
//     <button onClick={handledecrement}>-</button>
//     <form onSubmit={handlesubmit}>
//       <input type="text" onChange={handlechange} value={student}/>
//       <button type="submit">submit</button>
//       {students.map((el,index)=>(<h1 key={index}>{el}</h1>
//     ))}
//       </form>
//     </div>
//   );
// }
// export default App;
import React, { useState } from 'react'
import './App.css';
function App() {
  const[users,setusers]=useState([]);
  const[User,setUser]=useState({email:"",name:""});
  const handlechangename=(e)=>{
    setUser({...User, name: e.target.value});
   
  }
  const handlechangeEmail=(e)=>{
 setUser({...User, email: e.target.value});
  }
 
  const handleSubmit=(event)=>{
    event.preventDefault();
    setusers([...users,User]);
    setUser({email:"",name:""})
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={handlechangename} value={User.name}/>
          </div>
        
          <div>
          <input type="email" onChange={handlechangeEmail} value={User.email}/>
          </div>
        <button type="submit">Submit</button>
      </form>
      {users.map((el,index)=>(<div key={index}><h1>{el.name}</h1>
     <h1>{el.email}</h1></div>
      ))}
    </div>
  )
}

export default App
