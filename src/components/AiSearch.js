import { BACKGROUND_IMG } from "../utils/constants"
import AiMovieSuggestions from "./AiMovieSuggestions"
import AiSearchBar from "./AiSearchBar"

const AiSearch = () => {
  return (
    <div>
    <div className="absolute -z-10 ">
        <img
          src={BACKGROUND_IMG}
          alt="logo"
        />
      </div>
    <AiSearchBar />
    <AiMovieSuggestions />
    </div>
  )
}

export default AiSearch