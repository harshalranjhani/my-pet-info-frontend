import React from "react";
import PetInfoCard from "./PetInfoCard.jsx";

const Landing = () => {
  return (
    <div>
      <div className="text-4xl font-black text-center text-white m-5">
        Dog breeds
      </div>
      <div className="flex flex-col md:flex-row">
        <PetInfoCard />
        <PetInfoCard />
      </div>
    </div>
  );
};

export default Landing;
