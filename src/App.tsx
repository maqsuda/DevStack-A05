import { Suspense } from "react";
import "./App.css";
import Banner from "./component/Banner";
import Copyright from "./component/Copyright";
import ExploreTechnology from "./component/ExploreTecnology";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import type { ITechnology } from "./types/Technology";

const exploreTechnologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("./exploreData.json");
  const data = await res.json();
  return data;
};

function App() {
  const exploreTechnologiesPromise = exploreTechnologiesFetch();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading....</h2>}>
        <ExploreTechnology
          exploreTechnologiesPromise={exploreTechnologiesPromise}
        ></ExploreTechnology>
      </Suspense>

      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}

export default App;
