import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-3">
      <img alt="movie card" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
