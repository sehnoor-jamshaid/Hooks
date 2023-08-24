import React,{useState} from "react";
import Rest from "./utils/MockData";
import Cards from "./Cards";

const Body = () => {
    const [state, setstate] = useState(Rest)
  return (
    <div className="body_container">
      <div>
        {/* <input className="search" placeholder="Search" /> */}
        <button className="top_rated" onClick={() => {
            const filteredList=Rest.filter((val)=> val.info.avgRating > 4.3)
            setstate(filteredList)
            console.log("filteredList",filteredList)
        }}>
          Top Rated Restuarants
        </button>
      </div>
      <div className="cards_flex">
        {state.map((val, ind) => (
          <Cards data={val} key={val.info.cloudinaryImageId} />
        ))}
      </div>
    </div>
  );
};

export default Body;
