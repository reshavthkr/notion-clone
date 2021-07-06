import React,{useState,useEffect} from 'react';
import './App.css'
import Addtask from './components/addtasks/Addtask';

function App() {
  const [taskContainer, setTaskContainer] = useState(["No status","Not Started"])
  const [isAddContainer, setIsAddContainer] = useState(false)
  const [newStatus, setNewStatus] = useState("")


  useEffect(()=>{
    const taskGroup = localStorage.getItem(taskContainer);
    if(taskGroup){
      setTaskContainer(JSON.parse(taskGroup))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('taskContainer', JSON.stringify(taskContainer))
  })

  const handleAddContainer = () =>{
    setIsAddContainer(!isAddContainer);
    const value=[...taskContainer];
    newStatus?value.push(newStatus):setIsAddContainer(!isAddContainer);
    setNewStatus("")
    setTaskContainer(value);
  }


  const handleAddContainerOnChange = (e) =>{
    setNewStatus(e.target.value);
  }


  const handleOnSubmit =(e) =>{
    e.preventDefault();
    const value=[...taskContainer];
    newStatus?value.push(newStatus):setIsAddContainer(!isAddContainer);
    setNewStatus("")
    setTaskContainer(value);
    setIsAddContainer(!isAddContainer);
}

  return (
    <div className="taskBoard">
      <h3 className="taskHeading">Task Board</h3>
      <div className="statusContainer">
        {taskContainer.map((status,i)=>(
          <Addtask key={i} status={status}/>
        ))}
        <form onSubmit={handleOnSubmit}>
          {isAddContainer?<input 
          className ="inputTask"
          placeholder="enter status name"
          type="text" 
          onChange={handleAddContainerOnChange}/>:""}
        </form>
        <button className="addGroup addTaskButton" onClick={handleAddContainer}>+ add a group</button>
      </div>
    </div>
  );
}

export default App;
