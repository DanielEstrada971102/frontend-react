function TableRow({item}){
    return <>
        <tr>
            <td>{item["date"]}</td>
            <td>{item["device"]}</td>
            <td>{item["temperature"]}</td>
            <td>{item["humidity"]}</td>
        </tr>
    </>
}

export default TableRow