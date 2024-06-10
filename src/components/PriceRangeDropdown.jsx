import { useState, useContext } from "react";
import { HouseContext } from "./HouseContext";
import { Menu } from "@headlessui/react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiWallet3Line,
} from "react-icons/ri";

function PriceRangeDropdown() {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "10000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "10000 - 30000",
    },
    {
      value: "30000 - 40000",
    },
  ];

  let hide = "";
  if (price != "Price range (any)") {
    hide = "hidden";
  }

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className={`text[13px] ${hide}`}>Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => {
                setPrice(price.value);
                setIsOpen(!isOpen);
              }}
              className="cursor-pointer hover:text-violet-700 transition"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default PriceRangeDropdown;
