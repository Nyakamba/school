import React from "react";

const Announcements = () => {
  return (
    <div className=" bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-skyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1 ">
              2025-01-01
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm ">
            Lorem ipsum, dolor sit amet
          </p>
        </div>
        <div className="bg-purpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1 ">
              2025-01-01
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm ">
            Lorem ipsum, dolor sit amet
          </p>
        </div>
        <div className="bg-yellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1 ">
              2025-01-01
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm ">
            Lorem ipsum, dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
