import './App.css';
import './TableContainer.css';

function App() {
  return (
    <div className="app-container">
      <h1>6th Job (Hexa Matrix)
      </h1>
      <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>

  );
}

export default App;
