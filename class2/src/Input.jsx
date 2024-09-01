import { useState } from "react";

function Input()
{
    const [text,settext]=useState("TYPE HERE");
    function change(e)
    {
        console.log(text);
        settext(e.target.value);
        console.log(text);
    }
    // let text="TYPE HERE";
    return(
        <>
        {text}
        <input onChange={(e)=>change(e)}></input>
        {console.log(text)};
        </>
    )
}

export default Input;