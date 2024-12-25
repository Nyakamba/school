import Image from "next/image";
const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 rounded-full px-2 text-xs ring-[1.5px]  ring-gray-300">
      <Image src="/search.png" alt="search" width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-full  p-2 bg-transparent outline-none"
      />
    </div>
  );
};

export default TableSearch;
