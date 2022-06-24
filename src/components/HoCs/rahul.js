import React, { useState } from 'react'


export default function Rahul() {
  const [count,setCount] = useState(0);

  const onmouseover =() => { 
 
    setCount(count+1)
  }

  return (
    <div>
        <h2>{count}</h2>
     
     <button onMouseOver={()=>onmouseover()}>Please Hover Here</button> 


    </div>
  )
}
