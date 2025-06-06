import { useState, useContext } from "react";
import { HouseContext } from "./HouseContext";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";

function CountryDropdown() {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);
  let hide = "";
  if (country != "Location (any)") {
    hide = "hidden";
  }

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className={`text[13px] ${hide}`}>Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => {
                setCountry(country);
                setIsOpen(!isOpen);
              }}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default CountryDropdown;
