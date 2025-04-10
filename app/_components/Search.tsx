import { BiSearch } from "react-icons/bi";

const Search: React.FC = function () {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="font-semibold px-6 text-sm"> Anywhere</div>
        <div className="text-sm font-semibold px-6 border-x-[1px] flex-1 text-center hidden sm:block">
          Any week
        </div>
        <div className="text-sm px-6 text-gray-600 flex items-center gap-3">
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
