import React, { useEffect, useState } from "react";
import PetInfoCard from "./PetInfoCard.jsx";
import axios from "axios";
import Loader from "./Loader.jsx";

const Landing = () => {
  const [dogBreedData, setDogBreedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const backendUrl = "http://localhost:3000";
  const getBreedData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/dog-breeds`);
      setDogBreedData(response.data);
      console.log(dogBreedData);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getBreedData();
  }, []);

  return (
    <div>
      <div className="text-4xl font-black text-center text-black m-5">
        Dog breeds
      </div>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="flex flex-col md:flex-row flex-wrap">
          {dogBreedData.map((breed) => (
            <PetInfoCard petInfo={breed} />
          ))}
        </div>
      )}
      {/* <div
        className={`text-4xl  ${
          !isLoading ? "mt-0" : ""
        } font-black text-center text-black m-5`}
      >
        Cat breeds
      </div> */}
    </div>
  );
};

export default Landing;
