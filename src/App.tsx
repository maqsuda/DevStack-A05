import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Copyright from "./components/Copyright";
import ExploreTechnology from "./components/ExploreTecnology";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import type { ITechnology } from "./types/types";
import Sidebar from "./components/Sidebar";

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
      <main className="w-10/12 mx-auto ">
        <section className="container mx-auto ">
          <div className="">
            <h2 className="text-5xl font-extrabold mb-5">
              Explore the
              <span className="bg-linear-to-r from-[#EC4899] from-0% via-[#BC52C8] via-22% to-[#8B5CF6] to-100% bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-gray-500 mb-5">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {/* Technology Component */}
            <Suspense fallback={<h2>Loading....</h2>}>
              <ExploreTechnology
                exploreTechnologiesPromise={exploreTechnologiesPromise}
              ></ExploreTechnology>
            </Suspense>
            {/* reading lish componenets */}
            <Sidebar></Sidebar>
          </div>
        </section>
      </main>

      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}

export default App;
