import { useState, useContext } from "react";
import { HouseContext } from "./HouseContext";
import { Menu } from "@headlessui/react";
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from "react-icons/ri";

function PropertyDropdown() {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  let hide = "";
  if (property != "Property type (any)") {
    hide = "hidden";
  }

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className={`text[13px] ${hide}`}>Select your property</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => {
                setProperty(property);
                setIsOpen(!isOpen);
              }}
              as="li"
              className="cursor-pointer hover:text-violet-700 transition"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default PropertyDropdown;
