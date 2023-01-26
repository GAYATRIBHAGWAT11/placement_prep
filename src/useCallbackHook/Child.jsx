import React, { memo } from 'react'
const Child=({counterTwo, fun, setCounterTwo})=> {
    console.log("child component render");
  return (
    <>
    <h1>child component</h1>
      
    </>
  )
}
export default memo(Child);
