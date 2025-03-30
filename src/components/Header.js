import { useEffect, useState, useContext } from "react";
import logo from "../assests/img/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Title = () => (
  <Link to="/">
    <img className="w-40" alt="logo" src={logo} />
  </Link>
);
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  //Subscribing to the slice using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // useEffect(() => {}, [btnName]);
  return (
    <div className="flex justify-between bg-slate-400  shadow-lg rounded-md sm:bg-yellow-50 lg:bg-green-50 ">
      <div className="flex bg-white">
        <Title />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-6 m-6  ">
          <li className="px-4 py-4">
            Online Status:{onlineStatus ? "✅" : "⛔"}
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:bg-slate-50 py-4 rounded-xl font-bold text-xl">
            <Link to="/cart">
              <span>🛒({cartItems.length}🥢)</span>
            </Link>
          </li>
          <li>
            <button
              className=" px-4 bg-slate-50 hover:bg-slate-600  py-4 rounded-xl"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 py-4 font-bold text-green-700 ">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
