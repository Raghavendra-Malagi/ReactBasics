import React from "react";
import ReactDOM from "react-dom/client";

// const Heading = React.createElement("h1", {}, "Hello React 🚀");
// const JSXHeading = <h1>Hello JSX 🚀</h1>;
// const Title = () => {
//   return <h1>Heading</h1>;
// };
// const someHeading = <h1 className="SomeHeading">SomeHeading</h1>;
// const num = 1000;
// const HeadingComponent = () => (
//   <div className="container">
//     <Title />
//     <h2>{num}</h2>
//     <h3>{someHeading}</h3>
//     {console.log("Hello")}
//     <h1 className="Hello React">Hello Functional Component from react</h1>
//   </div>
// );
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://png.pngtree.com/template/20191024/ourmid/pngtree-food-delivery-logo-design-fast-delivery-service-sign-image_323015.jpg"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const stylecard = {
  backgroundColor: "red",
};
const Resturantcards = (props) => {
  {
    console.log(props);
  }
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v8jgifosg3vdzrgsv1sw"
        alt="res-img"
      />
      <div className="res-data">
        <h1>{props.resName}</h1>
        <h4>{props.cuisines}</h4>
        <h4>4.5 🌟</h4>
        <h4>38 mins 🚲</h4>
      </div>
    </div>
  );
};

const resObj = {
  info: {
    id: "405798",
    name: "Chinese Wok",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    locality: "Malleshwaram",
    areaName: "Malleshwaram",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    avgRating: 4.3,
    parentId: "61955",
    avgRatingString: "4.3",
    totalRatingsString: "500+",
    sla: {
      deliveryTime: 55,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "55-60 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-07-09 22:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹149",
    },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.2",
        ratingCount: "10+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-d2d9a2a1-9f97-49d3-85b1-aa508d237c60",
  },
  cta: {
    link: "https://www.swiggy.com/restaurants/chinese-wok-malleshwaram-bangalore-405798",
    text: "RESTAURANT_MENU",
    type: "WEBLINK",
  },
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" />
        <button className="">Search</button>
      </div>
      <div className="res-container">
        {/*Resturantcards*/}
        <Resturantcards
          resName="Meghana Foods"
          cuisines="Biryani, North Indian, Asian"
        />
        <Resturantcards resName="KFC" cuisines="Burger, Rolls" />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
