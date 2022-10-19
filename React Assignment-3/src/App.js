import "./App.css";
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
