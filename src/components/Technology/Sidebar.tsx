import { ImCross } from "react-icons/im";
import type { ITechnology } from "../../types/types";

type TechListProps = {
  techs: ITechnology[];
  handleRemoveTech: (id: string) => void;
  handleClearAll: () => void;
};

const Sidebar = ({
  techs,
  handleRemoveTech,
  handleClearAll,
}: TechListProps) => {
  console.log(techs);
  return (
    <div className="border border-gray-100 p-5 rounded-lg shadow-xs">
      <h2>Your Stack</h2>
      <p>
        {techs.length === 0 ? (
          "No technologies selected yet"
        ) : (
          <>
            {techs.length} {techs.length === 1 ? "Technology" : "Technologies"}{" "}
            Saved{" "}
          </>
        )}
      </p>
      {techs.length === 0 ? (
        <p className="flex justify-center items-center border border-gray-100 mt-3 rounded-xl p-5">
          Your Stack is empty.
        </p>
      ) : (
        <>
          {techs.map((tech) => (
            <div className="flex justify-between items-center border border-gray-100 mt-1 rounded-xl p-2">
              <img className="w-10 h-10" src={tech.icon} />
              <h2>{tech.category}</h2>
              <ImCross
                className="size-3 text-gray-400 font-medium"
                onClick={() => handleRemoveTech(tech.id)}
              />
            </div>
          ))}
        </>
      )}

      <button
        className="w-full border text-red-500 font-bold  border-red-100 rounded-xl py-2 mt-5 "
        onClick={handleClearAll}
      >
        Remove All
      </button>
    </div>
  );
};

export default Sidebar;
