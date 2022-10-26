import "./App.css";
import Design from "./designComponent/Design";
import RegForm from "./formComponent/RegForm";
import RegFormUseRef from "./formComponent/RegFormUseRef";

// import HeaderComponent from "./components/HeaderComponent";
// import FooterComponent from "./components/FooterComponent";
// import ContentComponent from "./components/ContentComponent";
import Login from "./loginComponent/Login";
import AddEmployee from "./restApiCall/AddEmployee";
import StopWatch from "./stopwatchComponent/StopWatch";
import TableComponent from "./tableComponent/TableComponent";
import books from "./tableComponent/TableContent.json";

function App() {
  // const employeesArr = [];
  return (
    <>
      {/* <Login />
      <TableComponent bookDetails={books} />
      <Design />
      <StopWatch />
      <RegForm />
      <RegFormUseRef /> */}
      <AddEmployee />
    </>
    // <div className="App">
    //   <HeaderComponent name="home"></HeaderComponent>

    //   <ContentComponent employees={employeesArr}></ContentComponent>
    //   <FooterComponent copyright="Savyansh@gmail.com"></FooterComponent>
    // </div>
  );
}

export default App;
