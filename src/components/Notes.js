import React from "react"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';




const Notes = ({title, content, onDelete, id}) => {
  const submit = () => {
    onDelete(id);
  }
  return (
        <div className=" relative mr-3 mb-3 bg-white shadow-lg w-[250px] h-auto text-left rounded-2xl pt-6 float-left ">
             <h1 className="font-bold mb-3 pl-3 text-md"> {title}</h1>
             <p className="mb-7 pl-3 whitespace-pre-wrap break-words">{content} </p>
             <button
             onClick={submit}
             className="absolute bottom-0 right-0 text-sky-200 border-none w-[36px] h-[36px] cursor-pointer outline-none">
             <DeleteRoundedIcon/></button>

        </div>

  )
}
export default Notes
