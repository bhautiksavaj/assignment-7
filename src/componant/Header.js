import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <NavLink to="/">
        <div>home</div>
      </NavLink>
      <NavLink to="/cart">
        <div>cart</div>
      </NavLink>
    </>
  );
};
