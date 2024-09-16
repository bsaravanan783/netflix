import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const AiSearchBar = () => {
  const languageKey = useSelector((store) => store.config.language);

  return (
    <div className=" pt-[9%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[languageKey].aiSearchPlaceholder}
        />
        <button className="col-span-3 py-2 px-4 m-4  bg-red-700 text-white rounded-md">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;
