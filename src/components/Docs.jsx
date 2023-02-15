import React from "react";
import { Typography } from "@mui/material";
import DocComponent from "./DocComponent";
import ExampleResponseAll from "../assets/ExampleResponseAll.png";
import ExampleResponseOne from "../assets/ExampleResponseOne.png";
const docInfoArray = [
  {
    title: "Getting data for all the breeds of dogs",
    endpoint: "{baseUrl}/dog-breeds",
    exampleResponseImage: ExampleResponseAll,
    mt: 4,
  },
  {
    title: "Getting data for a particular breed",
    endpoint: "{baseUrl}/dog-breeds/:id",
    exampleResponseImage: ExampleResponseOne,
    mt: 28,
  },
];

const Docs = () => {
  return (
    <div>
      <div className="font-black md:text-3xl text-xl flex flex-row text-black m-10">
        Base Url:{" "}
        <Typography
          variant="body1"
          className="flex justify-center items-center"
          sx={{
            mx: 4,
            fontStyle: "italic",
            textDecoration: "underline",
            fontSize: {sm: "2rem", xs: "1rem"},
          }}
        >
          {`https://my-pet-info-backend.vercel.app`}
        </Typography>
      </div>
      <div className="font-black md:text-3xl text-4xl text-black m-10">
        API Endpoints
      </div>
      {docInfoArray.map((doc) => (
        <DocComponent docInfo={doc} />
      ))}
    </div>
  );
};

export default Docs;
