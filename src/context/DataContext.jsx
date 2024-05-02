import { createContext, useEffect, useState } from "react"

export const DataContext = createContext()

let render_time = 0;

export function DataContextProvider(props) {
    const [sensorData, setSensorData] = useState([])
    const [device, setDevice] = useState("all")
    const [orderBy, setOrderBy] = useState("date")
    const [lastest1st, setLastest1st] = useState(false)
    const [limit, setLimit] = useState(0)
    const [fetch_flag, setFetch] = useState(false)

    useEffect(() => {
        if (render_time == 0){ render_time++; return }
        fetch(
            device !="all"?
                `https://backend-guml.onrender.com/sensordata/${device}?limit=${limit}&sortby=${orderBy}&lastest1st=${lastest1st}`
                : `https://backend-guml.onrender.com/sensordata?limit=${limit}&sortby=${orderBy}&lastest1st=${lastest1st}`
        )
        .then(res => res.json())
        .then((data) => {setSensorData(data)})
        .catch((err) => {console.error(err)});
    }, [fetch_flag])

    console.log("Render Context");

    return (
        <DataContext.Provider value={{
            sensorData,
            fetch_flag,
            formValues: {
                device,
                orderBy,
                lastest1st,
                limit
            },
            valueSetters:{
                setDevice,
                setOrderBy,
                setLastest1st,
                setLimit,
                setFetch,
            }
        }}>{props.children}</DataContext.Provider>
    )

}
