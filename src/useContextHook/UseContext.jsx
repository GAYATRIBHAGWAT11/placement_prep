import React, { useContext } from "react";
import { varCreateContext } from '/Users/admin/PlacementPrep/placement_prep/src/useContextHook/ContextApi.jsx'

const UseContext = () => {
    const { myData } = useContext(varCreateContext)
    console.log("im child", myData);
    return (
        <>
            {myData.map((items) => (
                <>
                    <h1>{items.title}</h1>
                    <h1>{items.category}</h1>
                    <p>{items.description}</p>
                    <img src={items.image} alt="img unavailabale" />
                    <p><small>{items.price}</small></p>
                </>

            )



            )}
        </>
    )
}
export default UseContext;