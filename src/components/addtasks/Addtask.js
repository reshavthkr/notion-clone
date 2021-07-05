import React,{useState,useEffect} from 'react'
import Card from '../card/Card'

export default function Addtask({status}) {

    const [items, setItems] = useState([]);
    const [isAdd, setIsAdd] = useState(false);
    const [newTask, setNewTask] = useState("");
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        setCount(items.length)
    }, [items])
    
    const handleOnClick=()=>{
        setIsAdd(!isAdd);
        const value=[...items];
        newTask?value.push(newTask):setIsAdd(!isAdd);
        setNewTask("")
        setItems(value);
        
    }
    const handleOnSubmit =(e) =>{
        e.preventDefault();
        const value=[...items];
        newTask?value.push(newTask):setIsAdd(!isAdd);
        setNewTask("")
        setItems(value);
        setIsAdd(!isAdd);
    }

    const handleOnChange = (e) =>{
        setNewTask(e.target.value);
    }
    return (
        <div className="taskContainr">
            <h6>{status} {count}</h6>
            {items.length > 0 ? items.map((item,i)=>(
                <>
                <Card key={i} taskName={item}/>
                
                </>
            )):""}
            <form onSubmit={handleOnSubmit}>
                {isAdd?<input className="inputTask" onChange={handleOnChange} type="text" placeholder="add task"/>:""}
            </form>
            <button className="addTaskButton" onClick={handleOnClick}>+ New</button>
        </div>
    )
}

