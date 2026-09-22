import { use } from "react";
import Technology from "./Technology";
import type { ITechnology } from "../../types/types";

// interface TechnologyProps {
//   exploreTechnologiesPromise: Promise<ITechnology[]>;
// }

const Technologies = ({
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
        <Technology key={tech.id} technology={tech}></Technology>
      ))}
    </div>
  );
};

export default Technologies;
