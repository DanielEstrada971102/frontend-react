import Form from './components/Form';
import Table from './components/Table';
import Charts from './components/Charts';

function App() {
  console.log("Render App");
  return (
    <div className="container">
      <h1>Aplicación React para IOT</h1>
      <Form/>
      <Table/>
      <Charts/>
    </div>
  )
}

export default App
