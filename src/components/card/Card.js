import React,{useState} from 'react'
import PopUp from '../PopUp';

export default function Card({taskName}) {
const [isClick, setIsClick] = useState(false)


    const handleCardClick = () =>{
        // console.log("isClicked");
        setIsClick(true);
    }
    return (
        <>
            <div
            
            className="card m-1 p-1" style ={{width:"15rem", hight:"1rem"}}>
                <p onClick={handleCardClick}>{taskName}</p>
            </div>
            {isClick?<PopUp />:null}
        </>
    )
}
