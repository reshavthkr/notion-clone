import React,{useState} from 'react';
import './PopUp.css';

const PopUp = (props) => {
const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="popup--back">
            <div className="popup--content">
                <div className="popup--close" >
                    <div><i className="fas fa-trash"></i></div>
                    <div onClick={props.closePopup}>
                    <i class="fas fa-times"></i>
                    </div>
                </div>
                <div className="main-content ">
                    <input className="heading" value={props.taskName}/>
                </div>
                
            </div>
        </div>
    )
}


export default PopUp;