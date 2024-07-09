const Resturantcards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, cuisines, name, locality, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  console.log(resData);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-img"
      />
      <div className="res-data">
        <h1>{name}</h1>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{locality} 📫</h4>
        <h4>{deliveryTime} mins 🚲</h4>
      </div>
    </div>
  );
};

export default Resturantcards;
