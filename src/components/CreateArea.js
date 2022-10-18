import React, {useState} from "react"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CreateArea = ({onAdd}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notes, setNotes] = useState({
    title:"",
    content:""
  });
{/*funciton for when the state of the text items change*/}
const textChange = (e) =>{
  const {name, value}= e.target;
  setNotes(preNotes =>{
    return{
      ...preNotes,
      [name] : value
    }
  })
}

const addNotes = (e)=>{
  e.preventDefault();
  onAdd(notes);
  setNotes({
    title:"",
    content:""
  })

}
const expand = () => {
  setIsExpanded(true);
}

  return (
    <div className="flex justify-center items-center width-[100%] h-auto">
        <form className="relative w-[480px] my-[20px] mx-auto bg-white p-[15px] rounded-md shadow-lg flex flex-col justify-center">
           {isExpanded ? <input name="title" placeholder="Title" value={notes.title} onChange={textChange} /> : null}
          <textarea
          onClick ={expand}
          rows={isExpanded ? 3 : 1}
          name="content" placeholder="Take a note..."  onChange={textChange} value={notes.content}/>
          <button
          onClick={addNotes}
          className="flex hover:animate-bounce duration-1000 ease-in-out justify-center items-center bg-sky-500 text-white absolute right-[18px] border-none bottom-[-18px] rounded-full w-[46px] h-[46px] cursor-pointer outline-none shadow-md"
          ><AddCircleOutlineIcon/></button>
        </form>
      </div>
    );
}
export default CreateArea;
