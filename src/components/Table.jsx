import { useContext} from 'react'
import { DataContext } from '../context/DataContext'
import TableRow from './TableRow'
import styles from './Table.module.css'

function Table() {
    const { sensorData } = useContext(DataContext)
    console.log("Render table");
    return (
        <div className={styles.container}><table className={styles.table}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Device</th>
                    <th>Temperature</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>{
                sensorData.map((item, indx) => (<TableRow key={indx} item={item} />))
            }</tbody>
        </table ></div>
    )
}

export default Table