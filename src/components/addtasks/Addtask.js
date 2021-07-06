import React,{useState,useEffect} from 'react'
import Card from '../card/Card'

export default function Addtask({status}) {

    const [items, setItems] = useState([]);
    const [isAdd, setIsAdd] = useState(false);
    const [newTask, setNewTask] = useState("");
    const [count, setCount] = useState(0);

    
    useEffect(() => {
        const addedTask = localStorage.getItem('store')
        if(addedTask){
            setItems(JSON.parse(addedTask));
        }
    }, [])

    // const usePrevious = value => {
    //     const ref = React.useRef();
    //     useEffect(() => {
    //         ref.current = value;
    //     });
    //     return ref.current;
    // }
    // const previous = usePrevious(items)
    useEffect(()=>{
        setCount(items.length)
        // if ( previous.length!== items.length) {
        //     localStorage.setItem('items',JSON.stringify(items));
        // }
        const store = status;
        console.log(store);
        localStorage.setItem('store',JSON.stringify(items));
    },[items])
    
    const handleOnClick=()=>{
        setIsAdd(!isAdd);
        const value=[...items];
        newTask?value.push({id: new Date().getTime(), text : newTask, status:status}):setIsAdd(!isAdd);
        setNewTask('')
        setItems(value);
        
    }
    const handleOnSubmit =(e) =>{
        e.preventDefault();
        const value=[...items];
        newTask?value.push({id: new Date().getTime(), text : newTask, status:status}):setIsAdd(!isAdd);;
        setNewTask("")
        setItems(value);
        setIsAdd(!isAdd);
    }
    const handleDelete = (i) =>{
        items.splice(i,1);
    }
    const handleOnChange = (e) =>{
        setNewTask(e.target.value);
    }
    return (
        <div className="taskContainr">
            <h6>{status} {count}</h6>
            {items.length > 0 ? items.map((item,i)=>(
                <>
                <Card handleDelete={handleDelete} key={item.id} taskName={item.text}/>
                </>
            )):""}
            <form onSubmit={handleOnSubmit}>
                {isAdd?<input className="inputTask" onChange={handleOnChange} type="text" placeholder="add task"/>:""}
            </form>
            <button className="addTaskButton" onClick={handleOnClick}>+ New</button>
        </div>
    )
}

