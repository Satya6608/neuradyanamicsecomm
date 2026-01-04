import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import toggleIcon from "../../assets/Img/toggle.svg";
import closeIcon from "../../assets/Img/cancel.png";
import heartIcon from "../../assets/Img/heart.png";
import cartIcon from "../../assets/Img/shopping-bag.png";
import Badge from "../global/Badge";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.items.length);

  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  const navLinks = [
    { name: "Products", path: "/" },
    { name: "Favorites", path: "/favorites", icon: heartIcon },
    { name: "Cart", path: "/cart", icon: cartIcon },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            ShopEasy
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              Products
            </NavLink>

            <NavLink to="/favorites" className="relative">
              <img src={heartIcon} alt="Wishlist" className="h-5 w-5" />
              <Badge count={wishlistCount} />
            </NavLink>

            {/* Cart */}
            <NavLink to="/cart" className="relative">
              <img src={cartIcon} alt="Cart" className="h-5 w-5" />
              <Badge count={cartCount} />
            </NavLink>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <img
              src={open ? closeIcon : toggleIcon}
              alt="Menu Toggle"
              className="h-6 w-6"
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full top-16">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-md px-3 py-2 text-base font-medium ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span className="flex items-center gap-2">
                {link.icon && (
                  <img
                    src={link.icon}
                    alt={`${link.name} icon`}
                    className="h-5 w-5"
                  />
                )}
                {link.name}
              </span>

              {/* Badge at END */}
              {link.path === "/cart" && cartCount > 0 && (
                <span className="ml-2 min-w-[18px] h-[18px] rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}

              {link.path === "/favorites" && wishlistCount > 0 && (
                <span className="ml-2 min-w-[18px] h-[18px] rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
