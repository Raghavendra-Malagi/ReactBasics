import Resturantcards from "./Restaurantcards";
import resList from "../utils/mockdata";
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" />
        <button className="">Search</button>
      </div>
      <div className="res-container">
        {resList.map((elem) => (
          <Resturantcards key={elem.info.id} resData={elem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
