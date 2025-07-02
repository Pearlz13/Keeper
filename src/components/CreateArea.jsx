import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){
  const [isExpand,setExpand]=useState(false);

  const [inputText,setInputText]=useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const {name , value} = event.target;
    
    setInputText((prevNote)=>{
      return {...prevNote,[name]:value};
    });
  }

  function expand(){
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">   
        {isExpand && <input onChange={handleChange} name="title" value={inputText.title} placeholder="Title"/>}
        <textarea onClick={expand}  onChange={handleChange} name="content" value={inputText.content} placeholder="Type Here..." rows={isExpand ? 3 : 1 }/>
        <Zoom in={isExpand}>
        <Fab onClick={()=>{
          props.onAdd(inputText);
          setInputText({title:"",content:""});
        }}>
        <AddIcon fontSize="large"/>
        </Fab>
        </Zoom>
      </form>
  </div>
  );
}

export default CreateArea;