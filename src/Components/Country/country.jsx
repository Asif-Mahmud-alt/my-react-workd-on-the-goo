import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  //   console.log(country.flags.flags.png);

  const [Visited, setVisited] = useState(false);

  const handleEvent = () => {
    // console.log("btn clicked");
    // basic system
    // if (Visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // 2nd system
    // setVisited(!Visited);
    // 3rd system
    setVisited(Visited ? false : true);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${Visited && `country-visited`}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>name:{country.name.common} </h3>
      <p>Population:{country.population.population}</p>
      <p>
        Area: {country.area.area}
        {country.area.area > 300000 ? " Big Country" : "Small Country"}
      </p>
      <button onClick={handleEvent}>
        {Visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
