import { DataContext } from '../context/DataContext'
import { useContext } from 'react'
import Combobox from './Combobox';
import styles from './Form.module.css'

function Form() {
    const { fetch_flag, formValues, valueSetters } = useContext(DataContext)
    console.log("Render chart");

    function handlerSubmit(e) {
        e.preventDefault();
        valueSetters.setDevice(e.target.device.value);
        valueSetters.setOrderBy(e.target.order.value);
        valueSetters.setLimit(e.target.limit.value);
        valueSetters.setLastest1st(e.target.sort_dir.checked);
        valueSetters.setFetch(!fetch_flag)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handlerSubmit} className={styles.form}>
                <label htmlFor="device">Device: </label>
                <Combobox type="text" name="device" id="device" options={["all", "arduino", "esp32"]} />
                <label htmlFor="order">Order by: </label>
                <Combobox type="text" name="order" id="order" options={["date", "temperature", "humidity"]} />
                <label htmlFor="limit">Limit: </label>
                <input type="number" name="limit" id="limit" min={0} />
                <label htmlFor="sort-dir">Sort-dir:</label>
                <input type="checkbox" name="sort_dir" id="sort-dir" />
                <button>Apply</button>
            </form>
        </div>
    )
}

export default Form