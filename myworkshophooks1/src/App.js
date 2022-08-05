
//les bas react hooks
import { useState } from 'react';
import './App.css';
function App() {
  const [count,setcount]=useState(0);
  const [students,setstudents]=useState(["Racha"]);
  const [student,setstudent]=useState('');
  // console.log(useState(0)[0])
  // console.log(useState(0)[1])
   const handleIncrement=()=>{
    setcount(count+1)
  }
  const handledecrement=()=>{
    if(count>0){setcount(count-1)}
    
  }
  const handlechange=(event)=>{
    setstudent(event.target.value);
  }
  const handlesubmit=(e)=>{e.preventDefault();
setstudents([...students,student]);
setstudent("");
  }
    return (
    <div className="App">
    <button onClick={handleIncrement}>+</button>
    <h1>{count}</h1>
    <button onClick={handledecrement}>-</button>
    <form onSubmit={handlesubmit}>
      <input type="text" onChange={handlechange} value={student}/>
      <button type="submit">submit</button>
      {students.map((el,index)=>(<h1 key={index}>{el}</h1>
    ))}
      </form>
    </div>
  );
}

export default App;
