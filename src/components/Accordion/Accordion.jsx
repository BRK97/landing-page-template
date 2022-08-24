import {useState, useEffect, useRef} from 'react'
import "./accordion.scss";
import {images} from '../../constants';

export default function Accordion({
    question,
    answer,
}) {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div className="accordion">

            <button 
            onClick={toggleState}
            className="accordion-visible">
                <span>{question}</span>
                <img 
                    className={toggle && "active"}
                    src={images.chevron} 
                    alt="chevron"/>
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={
                {height: toggle ? `${heightEl}` : "0px",
                 minHeight: toggle ? `fit-content` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    {answer}
                </p>
            </div>
            
        </div>
    )
}