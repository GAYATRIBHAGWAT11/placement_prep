import React, { useRef, useState } from "react";


const UseRef = () => {
    const [show, setShow] = useState(false)
    let luckynm = useRef(null)


    const submitForm = (e) => {
        e.preventDefault()

        console.log(luckynm.current.value);

        luckynm.current.value===""? alert("please enter your name"): setShow(true)

    }
    return (
        <>
            <form onSubmit={submitForm}> 
                <div>
                    <label htmlFor="luckynm">enter your name</label>
                    <input type="text" id="luckynm" ref={luckynm}/>
                </div>
                <button>heyyy</button>
            </form>
            {show? `hello ${luckynm.current.value}`: "nothing to show here"}
        </>
    )
}
export default UseRef;