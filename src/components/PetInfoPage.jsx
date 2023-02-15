import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const PetInfoPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const backendUrl = "https://my-pet-info-backend.vercel.app";
  const getMoreInfo = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/dog-breeds/${id}`);
      console.log(response);
      setPet(response.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMoreInfo();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div>
            <img
              className="h-80 w-80 md:h-[33rem] md:w-[50rem] m-10 md:m-10"
              src={pet?.mainImageUrl}
              alt={pet?.name}
            />
          </div>
          <div className="m-10 p-20">
            <div className="font-black text-5xl">{pet?.name}</div>
            <div className="text-3xl m-3">
              Imperial Weight:{" "}
              {pet.imperialWeight ? pet?.imperialWeight : "Data Not Available"}
            </div>
            <div className="text-3xl m-3">
              Metric Weight:{" "}
              {pet.metricWeight ? pet?.metricWeight : "Data Not Available"}
            </div>
            <div className="text-3xl m-3">
              Imperial Height:{" "}
              {pet.imperialHeight ? pet?.imperialHeight : "Data Not Available"}
            </div>
            <div className="text-3xl m-3">
              Metric Height:{" "}
              {pet.metricHeight ? pet?.metricHeight : "Data Not Available"}
            </div>
            <div className="text-3xl m-3">Life Span: {pet?.lifeSpan}</div>
            <div className="text-3xl m-3">
              Bred For: {pet.bredFor ? pet?.bredFor : "Data Not Available"}
            </div>
            <div className="text-3xl m-3">
              Breed Group:{" "}
              {pet.breedGroup ? pet?.breedGroup : "Data Not Available"}
            </div>
            <div className="text-3xl m-3">
              Temperament:{" "}
              {pet.temperament ? pet?.temperament : "Data Not Available"}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PetInfoPage;
