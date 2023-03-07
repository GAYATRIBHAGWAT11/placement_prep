// import { iteratorSymbol } from 'immer/dist/internal';
import React, { useEffect, useState } from 'react'

const SearchFilter = () => {
    const [data, setData] = useState([]);
    const [filterVal, setFilterVal] = useState("")
    const [searchApiData, setSearchApiData] = useState([])
    useEffect(() => {
        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                // .then(json => console.log("json", json))
                .then(json => {
                    setData(json)
                    setSearchApiData(json)
                })
        }
        fetchData()
    }, [])

    const handleFilter = (e) => {
        if (e.target.value === '') {
            setData(searchApiData)
        } else {
            let filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setData(filterResult)
        }
        setFilterVal(e.target.value)

    }
    return (
        <>
            <div>
                <div>
                    <input placeholder='search' value={filterVal} onChange={(e) => {
                        handleFilter(e)
                    }} />
                </div>
                <table>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>phone</th>
                    {
                        data.map(item => {
                            return (
                                <tr>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.username}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

        </>
    )
}

export default SearchFilter
