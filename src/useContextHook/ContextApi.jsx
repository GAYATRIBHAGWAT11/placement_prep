import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

let varCreateContext = createContext()
const ContextApi = ({ children }) => {
    const [myData, setMyData] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data);
                setMyData(res.data)
            }).catch((err) => {
                console.log(err);
            })
    },[])
    return (
        <>
            <h1>hey, gayatri is practicing useContext</h1>
            <varCreateContext.Provider value={{ myData }}>
                {children}
            </varCreateContext.Provider>


        </>
    )
}
export { varCreateContext, ContextApi };