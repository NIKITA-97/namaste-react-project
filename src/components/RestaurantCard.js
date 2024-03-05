import { CDN_URL } from "../../utils/constant";


const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.info;
  
    return (
      <div className="res-card">
        <img
          className="res-img"
          src={CDN_URL +cloudinaryImageId}
          alt="restaurant image"
        />
        <h3 className="res-name">{name}</h3>
        <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
        <h4 className="res-rating">{avgRating}</h4>
        <h4 className="res-price">{costForTwo / 100} for two</h4>
        <h4 className="res-delivery-time">{deliveryTime} minutes</h4>
      </div>
    );
  };
  export default RestaurantCard;