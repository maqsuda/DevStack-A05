import "./App.css";
import Banner from "./components/Banner";
import Copyright from "./components/Copyright";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import TechnologyLayout from "./components/TechnologyLayout";

function App() {
  // const [saved,setSaved]=useState<ITechnology[]>([]);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <main className="w-10/12 mx-auto ">
        <TechnologyLayout></TechnologyLayout>
      </main>

      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}

export default App;
