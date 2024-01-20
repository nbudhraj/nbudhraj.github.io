import React, {useState} from 'react';
import Modal from 'react-modal';
import Close from "./icons8-close-30.png"
import "./workcard.css"



function WorkCard({title, image, workObject}) {
    const [modalIsOpen, setIsOpen] = useState(false);
    function handleOpen(){
        setIsOpen(true);
    }

    function handleClose(){
        setIsOpen(false);
    }

    return (
        <div className="work">
            <div>
                <button className="button" onClick={() => handleOpen()}>
                    <h2>{title}</h2>
                    <img width="200" height="200" src={image}></img>
                </button>
            </div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleClose}
            ariaHideApp={false}
            className="Modal"
            >
                <button className="xclose" onClick={() => handleClose()}><img height="15" width ="15" src={Close}></img></button>
                <h2>{workObject.title}</h2>
                <h3>{workObject.date}</h3>
                <div><p>{workObject.description}<br></br></p></div>
                {workObject.bullets === undefined ? <div></div>:<div>
                    <p>Some key highlights:</p>
                    <ul>{workObject.bullets.map((item,i) => <li key={i}>{item}</li>)}</ul>
                    </div>}
                <div className="link">{workObject.link === undefined ? <br></br> : <a href={workObject.link}>Check it out!</a>}</div>
            </Modal>
        </div>
    );
}

export default WorkCard;