import type { ITechnology } from "../../types/types";
import { FaStar } from "react-icons/fa";

interface TechnologyProps {
  technology: ITechnology;
}

// const [bgIcon,setBgIcon]=useState('White');

const Technology = ({ technology }: TechnologyProps) => {
  return (
    <div className="card bg-base-100 w-76 shadow-sm py-5">
      <div className="flex justify-between items-center px-5">
        <img className="w-12 h-12" src={technology.icon} />
        <button
          className="py-1 px-2 rounded-2xl  bg-bgIcon "
          style={{
            color: technology.color,
            backgroundColor: `${technology.color}20`,
          }}
        >
          {technology.badge}
        </button>
      </div>

      <div className="card-body">
        <h2 className="card-title">{technology.name}</h2>
        <p>{technology.description}</p>

        <hr className="text-gray-100" />

        <div className="flex justify-between gap-1">
          <div className=" bg-gray-100 rounded-xl px-2 py-1">
            {technology.category}
          </div>
          <div className="px-1 py-1">{technology.difficulty}</div>
          <div className="flex items-center  px-2 py-1">
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

export default Technology;
