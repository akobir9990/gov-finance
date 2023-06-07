import React from "react";
import { Box, Container } from "@mui/material";
import titleImage from "../../assets/titleImage.jpeg";

import "./style.css";
function index() {
  return (
    <Container className="pb-[20px]">
      <Box className="flex justify-center items-center text-center">
        <Box className=" px-[50px] max-w-2xl h-[100vh] bg-scroll flex flex-col justify-center items-center text-center border-[solid] rounded-md border-[white] border-[1px]">
          <h2 className="md:text-3xl text-xl mb-2">
            ЖИЯНОВА НАРГИЗА ЭСАНБОЕВНА
          </h2>
          <h2 className="md:text-3xl text-xl mb-4">ТАШМАТОВА РАНО ГАИБОВНА</h2>

          <h1 className="md:text-3xl text-xl font-bold my-5">
            ГОСУДАРСТВЕННЫЕ ФИНАНСЫ
          </h1>
          <h2 className="md:text-3xl text-4 mb-4">ИННОВАЦИОННЫЙ ВЕБ УЧЕБНИК</h2>
          <h3 className="">
            Для бакалавриата направления 5230600 – «Финансы и финансовые
            технологии»
          </h3>

          <img
            className="md:w-[400px] w-[300px] m-10"
            src={titleImage}
            alt=""
          />
          <p className="mt-10">Ташкент-2023 г.</p>
          {/* <p className="md:text-5xl text-[22px]">ГОСУДАРСТВЕННЫЕ ФИНАНСЫ</p> */}
        </Box>
      </Box>
    </Container>
  );
}

export default index;
