import { IMG_CDN_URL } from "../utils/config";
const styleCard = {
  backgroundColor: "#D3D3D3",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] h-[400px] rounded-lg font-serif bg-gray-200 hover:bg-slate-300"
      style={styleCard}
    >
      <img
        className="rounded-md"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}Stars</h4>
      <h4>₹{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="font-bold absolute bg-green-500 text-white rounded-md">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
