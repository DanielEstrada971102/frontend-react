import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import styles from './Chars.module.css';

Chart.register(CategoryScale);

function Charts() {
    const { sensorData } = useContext(DataContext);

    let chart_data = {
        labels: sensorData.map((data) => data.date),
        datasets: [
            {
                fill: true,
                backgroundColor: "rgba(53, 162, 235, 0.3)",
                label: "Temperature",
                data: sensorData.map((data) => data.temperature),
            },
            {
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                label: "Humidity",
                data: sensorData.map((data) => data.humidity),
            }
        ]
    }

    return (
        <div className={styles.container}><Line data={chart_data} options={
            {
                plugins:
                {
                    title: {
                        display: true,
                        text: "iot data"
                    },
                    legend: {
                        display: true
                    }
                }
            }
        } /></div>
    )
}

export default Charts