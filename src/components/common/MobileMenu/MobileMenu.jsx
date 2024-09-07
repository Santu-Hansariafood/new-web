import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import Dropdown from "../Dropdown/Dropdown";

const MobileMenu = ({ closeMobileMenu }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [peopleOpen, setPeopleOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const handleLinkClick = () => {
    closeMobileMenu();
    setServicesOpen(false);
    setPeopleOpen(false);
    setProductsOpen(false);
  };

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
      <NavItem
        to="/home"
        isActive={window.location.pathname === "/home"}
        onClick={handleLinkClick}
      >
        Home
      </NavItem>
      <NavItem
        to="/about"
        isActive={window.location.pathname === "/about"}
        onClick={handleLinkClick}
      >
        About
      </NavItem>
      <Dropdown
        title="Services"
        links={servicesLinks}
        isActive={window.location.pathname.includes("/services")}
        isOpen={servicesOpen}
        setIsOpen={setServicesOpen}
      />
      <Dropdown
        title="People"
        links={peopleLinks}
        isActive={window.location.pathname.includes("/people")}
        isOpen={peopleOpen}
        setIsOpen={setPeopleOpen}
      />
      <Dropdown
        title="Products"
        links={productsLinks}
        isActive={window.location.pathname.includes("/products")}
        isOpen={productsOpen}
        setIsOpen={setProductsOpen}
      />
      <NavItem
        to="/grothdevelopment"
        isActive={window.location.pathname === "/grothdevelopment"}
        onClick={handleLinkClick}
      >
        G & D
      </NavItem>
      <NavItem
        to="/contact"
        isActive={window.location.pathname === "/contact"}
        onClick={handleLinkClick}
      >
        Contact
      </NavItem>
      <NavItem
        to="/career"
        isActive={window.location.pathname === "/career"}
        onClick={handleLinkClick}
      >
        Career
      </NavItem>
    </>
  );
};

export default MobileMenu;
