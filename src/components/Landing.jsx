import React, { useEffect, useState } from "react";
import PetInfoCard from "./PetInfoCard.jsx";
import axios from "axios";
import Loader from "./Loader.jsx";

const Landing = () => {
  const [dogBreedData, setDogBreedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);
  const backendUrl = "https://my-pet-info-backend.vercel.app";
  const getBreedData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/dog-breeds`);
      setDogBreedData(response.data);
      console.log(dogBreedData);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsErrorLoading(true);
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
      <div className="flex justify-center items-center m-10">
        {isLoading && <Loader />}
      </div>
      {isErrorLoading && (
        <h1 className="font-black text-white text-center flex items-center justify-center">
          Could not load data.
        </h1>
      )}
      {!isLoading && dogBreedData.length > 0 ? (
        <div className="flex flex-col md:flex-row flex-wrap">
          {dogBreedData.map((breed) => (
            <PetInfoCard petInfo={breed} />
          ))}
        </div>
      ) : (
        <></>
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
