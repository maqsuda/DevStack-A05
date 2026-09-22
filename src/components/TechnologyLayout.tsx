import { Suspense } from "react";
import Sidebar from "./Technology/Sidebar";
import type { ITechnology } from "../types/types";
import Technologies from "./Technology/Technologies";

const exploreTechnologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
};
const exploreTechnologiesPromise = exploreTechnologiesFetch();

const TechnologyLayout = () => {
  return (
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
          <Technologies
            exploreTechnologiesPromise={exploreTechnologiesPromise}
          ></Technologies>
        </Suspense>
        {/* reading lish componenets */}
        <Sidebar ></Sidebar>
      </div>
    </section>
  );
};

export default TechnologyLayout;
