import { useState } from "react"
import '../css/modalPop.css'

import ModalPopUp from "./ModalPopUp";

const ModalDisplay = () => {
    const [isToggle, setIsToggle]= useState(false);

    const handleToggle = ()=>{
        setIsToggle(!isToggle)
    }

    function onCloseModal(){
        setIsToggle(false);
    }
  return (
    <div className="modal-container">
        <button onClick={handleToggle}>Modal</button>
        {isToggle && <ModalPopUp onCloseModal={onCloseModal} body={<div>Dharn is Here</div>} />}

    </div>
  )
}

export default ModalDisplay