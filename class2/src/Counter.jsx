import { useState } from "react";

function Counter()
{
    // let c=0;
    // function inc()
    // {
    //     console.log(c);
    //     c=c+1;
    //     console.log(c);
    // }
    // function dec()
    // {
    //     console.log(c);
    //     c=c-1;
    //     console.log(c);
    // }
    const [c,setc]=useState(10);
    function inc()
    {
        setc(c+1);
    }
    function dec()
    {
        setc(c-1);
    }
    return(
        <>
        <h1>{c}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        </>
    )
}

export default Counter;