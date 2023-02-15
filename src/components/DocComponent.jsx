import React from "react";
import { Typography, Box } from "@mui/material";
import ExampleResponseAll from "../assets/ExampleResponseAll.png";

const DocComponent = ({ docInfo }) => {
  return (
    <div className={`mt-${docInfo.mt}`}>
      <div>
        <Typography
          variant="h2"
          sx={{
            typography: { sm: "h4", xs: "h3" },
            mx: { sm: 5, xs: 2 },
            textDecoration: "underline",
          }}
        >
          {docInfo.title}
        </Typography>
      </div>
      <div className="flex items-center justify-center">
        <Box
          sx={{
            width: { sm: 500, xs: 800 },
            height: { sm: 50, xs: 80 },
            backgroundColor: "#dad7cd",
            mx: 10,
            my: 4,
            fontSize: { sm: "2rem", xs: "1rem" },
          }}
        >
          <Typography
            variant="h5"
            className="text-center flex items-center justify-center"
          >
            {" "}
            <Typography variant="h5" sx={{ color: "green", mx: 5 }}>
              GET
            </Typography>
            {`${docInfo.endpoint}`}
          </Typography>
        </Box>
      </div>
      <div>
        <Typography
          variant="h2"
          sx={{
            typography: { sm: "h4", xs: "h3" },
            mx: { sm: 5, xs: 2 },
            textDecoration: "underline",
          }}
        >
          Example Response
        </Typography>
        <div className="flex items-center justify-center">
          <Box
            sx={{
              width: { sm: 900, xs: 800 },
              height: 200,
              backgroundColor: "#dad7cd",
              mx: 10,
              my: 4,
            }}
          >
            <img
              className="h-80"
              alt="Example Response"
              src={docInfo.exampleResponseImage}
            ></img>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default DocComponent;
