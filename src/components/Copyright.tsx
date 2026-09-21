const Copyright = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto text-gray-400">
      <div className="flex justify-between items-center">
        <div>
          <p>© {new Date().getFullYear()} DevStack All right reserved </p>
        </div>
        <div className="flex justify-between gap-5">
          <p>Privacy</p>
          <p>Term</p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
