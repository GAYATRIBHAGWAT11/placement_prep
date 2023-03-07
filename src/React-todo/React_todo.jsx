import React, { useState } from 'react'

const React_todo = () => {
    const [inputData, setInputData] = useState("")
    const [applyInput, setApplyInputData] = useState([])


    const AddDataFn = () => {
        let updatedData = [...applyInput, inputData]
        console.log(updatedData);
        setApplyInputData(updatedData)

    }

    const removeFn = (i) => {
        const filteredList = applyInput.filter((elem, id) => {
            return i !== id
        })
        setApplyInputData(filteredList)
    }


    const removeAllFn = () => {
        setApplyInputData([])
    }

    console.log(inputData);
    return (
        <>
            <h1>to do list</h1>
            <div className='cont'>
                <input type="text" placeholder='Write here...' onChange={(e) => setInputData(e.target.value)} />
                <button onClick={AddDataFn}>Add</button>
            </div>
            <h1>here is your list</h1>
            {
                applyInput !== [] && applyInput.map((item, index) => {
                    return (
                        <>
                            <div className='subCont d-flex'>
                                <p>{item}</p>
                                <button onClick={() => removeFn(index)}>remove</button>
                            </div>
                        </>
                    )
                })
            }

            {
                applyInput.length >= 1 &&
                <button onClick={removeAllFn}>Remove all</button>
            }


        </>
    )
}

export default React_todo
