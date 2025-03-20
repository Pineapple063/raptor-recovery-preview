import { TiPlus, TiMinus } from "react-icons/ti";
import { useState } from "react";
const Question = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="faq-question-answer-container">
            <div className={`faq-question-container ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
                <div className="faq-question">
                    {question}
                </div>
                <div className="faq-toggle" >
                    {open ? <TiMinus size={32}/> : <TiPlus size={32}/>}
                </div>

                
            </div>
            <div className={`faq-answer ${open ? 'open' : ''}`}>
                {answer}
            </div>
        </div>
    )
}

export default Question