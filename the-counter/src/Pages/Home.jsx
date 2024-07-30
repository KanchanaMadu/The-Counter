import React from 'react'
import { useState } from 'react';
import './Home.css';

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
    
    <div className='body'>
      <h1 className='title'>The Counter</h1>
      <p className='subtitle'>The count is {count}</p>
      <button className='button' onClick={increment}>+</button>
      <button className='button' onClick={decrement}>-</button>
      <button className='button' onClick={reset}>Reset</button>
    </div>
  )
    
}
