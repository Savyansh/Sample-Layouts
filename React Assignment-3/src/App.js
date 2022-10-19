import "./App.css";
import Login from "./loginComponent/Login";
import TableComponent from "./tableComponent/TableComponent";
import books from "./tableComponent/TableContent.json";

function App() {
  return (
    <>
      <TableComponent bookDetails={books} />
    </>
  );
}

export default App;
