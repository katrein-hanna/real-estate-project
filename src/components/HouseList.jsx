import { useContext } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "./HouseContext";
import { ImSpinner2 } from "react-icons/im";
import House from "./House";

function HouseList() {
  const { houses, loading } = useContext(HouseContext);

  //if loading is true
  if (loading) {
    return (
      <ImSpinner2 className="m-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="container mx-auto flex items-center justify-center text-lg mt-32">
        Sorry. nothing found
      </div>
    );
  }

  return (
    <section className="mb-20 mt-32">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HouseList;
