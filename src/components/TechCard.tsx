import { useState } from "react";
import type { ITechnology } from "../types/types";
import { FaStar } from "react-icons/fa";

interface TechnologyProps {
  technology: ITechnology;
}



const [bgIcon,setBgIcon]=useState('White');


const TechnologyCard = ({ technology }: TechnologyProps) => {
  return (
    <div className="card bg-base-100 w-92 shadow-sm py-5">
      <div className="flex justify-between items-center px-5">
        <img className="w-12 h-12" src={technology.icon} />
{/* if(technology.icon==='react')
{
  setBgIcon='blue'
}
         */}
        <button className="py-1 px-2 rounded-2xl  bg-bgIcon text-blue-500">
          {technology.badge}
        </button>
      </div>
      <div className="card-body">
        <h2 className="card-title">{technology.name}</h2>
        <p>{technology.description}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{technology.category}</div>
          <div className="badge badge-outline">{technology.difficulty}</div>
          <div className="badge badge-outline">
            <FaStar className="text-amber-300" />
            {technology.rating}
          </div>
        </div>
      </div>

      <button className="bg-black text-white px-10 rounded mx-5 py-1">
        Add To Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
