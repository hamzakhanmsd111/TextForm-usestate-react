import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleupClick=()=>{
        
        let newText=text.toUpperCase();
        setText(newText)

    }
    const handleClick=()=>{
        
      let newText=text.toLowerCase();
      setText(newText)

  }
  const handleclearClick=()=>{
        
    let newText=" ";
    setText(newText)

}
    const handleOnChange=(event)=>{
       
        setText(event.target.value);}

    const[text,setText]=useState('');
    
    
    
  return (
    <>
    <div>
        <h1> {props.heading}</h1>
         <div className="form-group">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="12"></textarea>
   
  </div>
  
      
    </div>
    <button className= 'btn btn-primary mx-2' onClick={handleupClick}>Convert to upercase</button>
  <button className= 'btn btn-success mx-2' onClick={handleClick}>Convert to lowercase</button>
  <button className= 'btn btn-success mx-2' onClick={handleclearClick}>clear</button>
  
    <div className="container my-3">
      <h1> your text summery</h1>
      <p>{text.split(" ").length} words and {text.length}  char</p>
      <p>{0.008*text.split(" ").length} minutes</p>
      <h2>preview</h2>
      <p>{text}</p>
      </div>

     
    </>
  )
}
