import { use } from "react";
import type { ITechnology } from "../types/Technology";

interface TechnologyProps {
  exploreTechnologiesPromise: Promise<ITechnology[]>;
}

const ExploreTechnology = ({ exploreTechnologiesPromise }: TechnologyProps) => {
  const technology = use(exploreTechnologiesPromise);
  console.log(technology, "Technology");
  return <div></div>;
};

export default ExploreTechnology;
