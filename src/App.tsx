import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Copyright from "./components/Copyright";
import ExploreTechnology from "./components/ExploreTecnology";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import type { ITechnology } from "./types/types";

const exploreTechnologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
};
const exploreTechnologiesPromise = exploreTechnologiesFetch();
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <main>
        <section className="container mx-auto mt-10">
          <div className="grid grid-cols-4 gap-5">
            {/* Technology Component */}
            <Suspense fallback={<h2>Loading....</h2>}>
              <ExploreTechnology
                exploreTechnologiesPromise={exploreTechnologiesPromise}
              ></ExploreTechnology>
            </Suspense>
            {/* reading lish componenets */}
          </div>
        </section>
      </main>

      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}

export default App;
