import React, { useEffect, useState } from 'react'

const HttpReq = () => {
    const [data, setData] = useState([])


    const url = "https://jsonplaceholder.typicode.com/comments"

    // get api
    useEffect(() => {
        fetch(url, {
            headers: {
                companyID: '324535445',    //if we want to pass id in get api
            }
        }).then(res => res.json()).then(json => {
            console.log(json)
            setData(json)
        }
        ).catch(err => {
            console.log("this is error", err);
        })
    }, [])

    // post and put api
    const postPutEvent = () => {
        const data = {
            id: 'def234',
            name: 'gayatri',
            mobile: '1234567890',
            designation: 'developer',
            pin: '45678'
        }
        const url = data.id ? `https://jsonplaceholder.typicode.com/comments/${data.id}` : "https://jsonplaceholder.typicode.com/comments"

        //post api
        fetch(url, {
            method: data.id ? 'PUT' : "POST",
            header: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" //id prevent from error

            },
            // body=> the data we want to add in doc
            body: JSON.stringify(data)

        }).then(res => {
            console.log(res)
            if (res.state === 500) {
                alert("success")
            }
        })
            .catch(err => {
                console.log("this is error", err);
            })

    }
    return (
        <>
            <div className='App'>
                <h2>Welcome</h2>
                {
                    data.map((items) => {
                        return (
                            <>
                                <div>{items.email}</div>

                            </>
                        )
                    }
                    )}

                <button onClick={postPutEvent}>submit</button>
            </div>
        </>
    )
}

export default HttpReq
