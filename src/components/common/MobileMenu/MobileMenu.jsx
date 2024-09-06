import React from "react";
import NavItem from "../NavItem/NavItem";
import Dropdown from "../Dropdown/Dropdown";

const MobileMenu = ({ mobileMenuOpen }) => {
  const servicesLinks = [
    { path: "/services/commodity-trading", label: "Commodity Trading" },
    {
      path: "/services/market-intelligence-analysis",
      label: "Market Intelligence",
    },
    { path: "/services/top-notch-broking", label: "Top Notch Broking" },
  ];

  const peopleLinks = [
    { path: "/people/teams", label: "Teams" },
    { path: "/people/leaders", label: "Leaders" },
    { path: "/people/clients", label: "Clients" },
    { path: "/people/farmers", label: "Farmers" },
  ];

  const productsLinks = [
    { path: "/products/maize", label: "Maize" },
    { path: "/products/category2", label: "Wheat" },
    { path: "/products/category3", label: "Paddy" },
    { path: "/products/category4", label: "Broken Rice" },
  ];

  return (
    <>
      <NavItem to="/home" isActive={window.location.pathname === "/home"}>
        Home
      </NavItem>
      <NavItem to="/about" isActive={window.location.pathname === "/about"}>
        About
      </NavItem>
      <Dropdown
        title="Services"
        links={servicesLinks}
        isActive={window.location.pathname.includes("/services")}
      />
      <Dropdown
        title="People"
        links={peopleLinks}
        isActive={window.location.pathname.includes("/people")}
      />
      <Dropdown
        title="Products"
        links={productsLinks}
        isActive={window.location.pathname.includes("/products")}
      />
      <NavItem
        to="/grothdevelopment"
        isActive={window.location.pathname === "/grothdevelopment"}
      >
        G & D
      </NavItem>
      <NavItem to="/contact" isActive={window.location.pathname === "/contact"}>
        Contact
      </NavItem>
      <NavItem to="/career" isActive={window.location.pathname === "/career"}>
        Career
      </NavItem>
    </>
  );
};

export default MobileMenu;
