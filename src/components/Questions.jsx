import React, {useState} from 'react';




const Questions = (prop) => {
  const [closed, setClosed] = useState(false);
  return (
    <div className={closed ? "questionAnswer": "questionAnswer closed"}>
      <p onClick={() => setClosed(!closed)}>{prop.question} <i className="fas fa-angle-up"></i></p>
      <p >{prop.answer}</p>
    </div>
  );
} 

export default Questions;