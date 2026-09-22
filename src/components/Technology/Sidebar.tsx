import { ImCross } from "react-icons/im";
import imgFile from "../../assets/hero.png";

const Sidebar = () => {
  return (
    <div className="border border-gray-100 p-5 rounded-lg shadow-xs">
      <h2>Your Stack</h2>
      <p>No Technologies selected yet </p>
      <div className="flex justify-between items-center border border-gray-100 mt-1 rounded-xl p-2">
        <img className="w-10 h-10" src={imgFile} />
        <h2>Description no text yet</h2>
        <ImCross className="size-3 text-gray-400 font-medium" />
      </div>
      <button className="w-full border text-red-500 font-bold  border-red-100 rounded-xl py-2 mt-5 ">
        Remove All
      </button>
    </div>
  );
};

export default Sidebar;
