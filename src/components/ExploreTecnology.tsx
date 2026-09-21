import { use } from "react";
import type { ITechnology } from "../types/types";
import TechCard from "./TechCard";

// interface TechnologyProps {
//   exploreTechnologiesPromise: Promise<ITechnology[]>;
// }

const ExploreTechnology = ({
  exploreTechnologiesPromise,
}: {
  exploreTechnologiesPromise: Promise<ITechnology[]>;
}) => {
  const allTechnology = use(exploreTechnologiesPromise);
  console.log(allTechnology, "Technology");
  return (
    <div className="col-span-3 grid grid-cols-3 gap-5 ">
      {allTechnology.length === 0 && <p>'No technology'</p>}
      {allTechnology.map((tech) => (
        <TechCard key={tech.id} technology={tech}></TechCard>
      ))}
    </div>
  );
};

export default ExploreTechnology;
