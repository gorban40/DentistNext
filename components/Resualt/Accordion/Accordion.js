import { useState } from "react";
import Image from "next/image";

import arrow from '../../../public/images/icons/accordion/right-arrows.png'

const Accordion = (props) => {
    const {title} = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <div onClick={() => setIsOpen(!isOpen)} className="accordion-wrapper">
                <h4 className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                    <span>{title}</span>
                </h4>
                <Image  width="25px" height="20px" className='toggle' src={arrow} aria-expanded={isOpen} alt='Toggle Accordion'/>
            </div>
            <div className="accordion-content" aria-expanded={!isOpen}>
                {props.children}
            </div>
        </div>
    )
}

export default Accordion;