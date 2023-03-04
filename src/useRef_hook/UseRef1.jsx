// import { useRef, useState } from "react"

// const usRef = () => {
//     const [show, setSjoe] = useState(false)
//     let luckynm = useRef(null)

//     const submitForm = (e) => {
//         e.preventDefault()

//         luckynm.current.value==""? alert("please enter your name"):show(true)

//     }


//     return (
//         <>
//             <form onSubmit={submitForm}>
//                 <div>
//                     <label htmlFor="luckynm" />
//                     <input type="text" id="luckynm" ref={luckynm} />
//                 </div>

//             </form>
//             {show? `hello ${luckynm.current.value}`: "nothing to show here" }
//         </>
//     )
// }