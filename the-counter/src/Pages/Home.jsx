import React from 'react'
import { useState } from 'react';

export default function Home() {
 

      const [count, setCount] = useState(0);
   //let count = 0;

  const increment = () =>{
  //count +=1;
   setCount(count +1);

  };

  const decrement =() =>{
    //count -=1;
    setCount(count -1);
  };

  const reset =() =>{
    //count -=1;
    setCount(0);
  };


  return (
    
    <div>
      <h1>The Counter</h1>
      <p>The count is {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
    
}
