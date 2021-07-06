import React,{useState} from 'react'
import PopUp from '../popUp/PopUp';

export default function Card(props) {
const [isClick, setIsClick] = useState(false)


    const handleCardClick = () =>{
        // console.log("isClicked");
        setIsClick(true);
    }
    const closePopup = () =>{
        setIsClick(false);
    }
    return (
        <>
            <div
            onClick={handleCardClick}
            className="card m-1 p-1" style ={{width:"15rem", hight:"1rem"}}>
                <p>{props.taskName}</p>
            </div>
            {isClick?<PopUp taskName={props.taskName} closePopup = {closePopup}/>:null}
        </>
    )
}
