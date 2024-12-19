import React, {  } from 'react'
import { useCounter } from '../provider/Context'; 


interface MyButtonProps {
  text: string | number | boolean;
  onClick?: () => void;
  something?: boolean;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  
  const context = useCounter()

  return (
    <>
     <h1>{context?.value}</h1>
     <p onClick={() => context?.setCount(context?.value + 1)}>click</p>
    </>
  )
}

export default MyButton