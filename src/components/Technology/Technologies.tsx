import { use } from "react";
import Technology from "./Technology";
import type { ITechnology } from "../../types/types";

interface TechnologiesProps {
  techPromise: Promise<ITechnology[]>;
  handleSavedTech: (techs: ITechnology) => void;
  saved: ITechnology[];
}

const Technologies = ({
  techPromise,
  handleSavedTech,
  saved,
}: TechnologiesProps) => {
  const allTechnology = use(techPromise);
  // console.log("All Tech :", allTechnology);
  return (
    <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 lg:gap-5 ">
      {allTechnology.length === 0 && <p>'No Technology Found'</p>}
      {allTechnology.map((tech) => (
        <Technology
          key={tech.id}
          technology={tech}
          handleSavedTech={handleSavedTech}
          saved={saved}
        ></Technology>
      ))}
    </div>
  );
};

export default Technologies;
