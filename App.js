import { Fragment } from "react";
import Footer from "./dummyLayout/Footer";
import Header from "./dummyLayout/Header";
import MainContent from "./dummyLayout/MainContent";
import Navigation from "./dummyLayout/Navigation";
// import Footer from "./staticComponents/Footer";
// import Header from "./staticComponents/Header";
// import LastVisitComponent from "./staticComponents/LastVisitComponent";
// import MainComponent from "./staticComponents/MainComponent";
// import SiteDetailComponent from "./staticComponents/SiteDetailComponent";

function App() {
  return (
    <Fragment>
        {/* <Header />
        <MainComponent />
        <LastVisitComponent />
        <SiteDetailComponent />
        <Footer /> */}
        <Header />
        <Navigation />
        <MainContent />
        <Footer />
    </Fragment>
  );
}

export default App;
