import { Suspense, useState } from "react";
import Sidebar from "./Technology/Sidebar";
import type { ITechnology } from "../types/types";
import Technologies from "./Technology/Technologies";
import { toast } from "react-toastify";

const exploreTechnologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
};
const techPromise = exploreTechnologiesFetch();

const TechnologyLayout = () => {
  const [saved, setSaved] = useState<ITechnology[]>([]);

  const handleSavedTech = (tech: ITechnology) => {
    // check book is already added
    const ids = saved.map((item) => item.id); // [1,2 ,2]

    if (ids.includes(tech.id)) {
      toast.error(`${tech.category} is already on your list`);
      return;
    }

    setSaved([...saved, tech]);
    toast.success(`${tech.category} added on your list`);
  };

  const handleRemoveTech = (id: string) => {
    // check the item is available
    const findTech = saved.find((item) => item.id === id);
    // if (!findBook) return toast.error('Books Not found')
    const updatedList = saved.filter((item) => item.id !== id);
    setSaved(updatedList);
    if (findTech) toast.success(`${findTech.category} removed form your list`);
  };

  const handleClearAll = () => {
    if (!saved.length) return;
    setSaved([]);
    toast.success("Your technology list is clear.", { position: "top-right" });
  };

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
            handleSavedTech={handleSavedTech}
            techPromise={techPromise}
            saved={saved}
          ></Technologies>
        </Suspense>
        {/* reading lish componenets */}
        <Sidebar
          techs={saved}
          handleClearAll={handleClearAll}
          handleRemoveTech={handleRemoveTech}
        ></Sidebar>
      </div>
    </section>
  );
};

export default TechnologyLayout;
