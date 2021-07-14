import React from "react";

const HomeItem = ({itemImage, itemName, span}) => {
  return (
    <div
      className={`overflow-hidden max-w-sm sm:max-w-none col-span-${span} max-h-96 col border-2 border-black rounded-xl`}
    >
      <div className="relative hover:scale-125 transition-all ease-in-out duration-[1.5s] w-full h-full z-0">
        <img src={itemImage} className="w-full h-full object-cover rounded-xl z-10" />
        <div className="absolute inset-0 hover:bg-black/50 transition-all ease-in-out duration-1000 z-20">
          <div className="absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 bg-white/25 hover:bg-white/80 rounded-lg p-4 px-8 cursor-pointer text-center">
            <span className="text-black/50 font-bold">{itemName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
