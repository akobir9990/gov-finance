import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import esanbayevna from "../../assets/images/esanbayevna.jpg";
import tashmatova from "../../assets/images/tashmatova.jpg";

export default function MediaCard() {
  return (
    <div className="pb-[20px]">
      <Card className="flex flex-col p-7 items-center sm:flex-row my-7">
        <div>
          <img
            className=" max-w-[300px]"
            src={esanbayevna}
            alt="Жиянова Наргиза Эсанбоевна"
          />
        </div>
        <CardContent className="sm:text-4xl">
          <h1 className="text-[30px] font-bold">Жиянова Наргиза Эсанбоевна </h1>
          <h2 className="text-[20px]">
            к.э.н., профессор кафедры "Финансы" Ташкентского финансового
            института
          </h2>
        </CardContent>
      </Card>
      <Card className="flex flex-col p-7 items-center sm:flex-row my-7">
        <div>
          <img
            className=" max-w-[300px]"
            src={tashmatova}
            alt="ТАШМАТОВА РАНО ГАИБОВНА"
          />
        </div>

        <CardContent className="sm:text-4xl">
          <h1 className="text-[30px] font-bold">ТАШМАТОВА РАНО ГАИБОВНА </h1>
          <h2 className="text-[20px]">
            Доцент кафедры "Финансы" Ташкентского финансового института
          </h2>
        </CardContent>
      </Card>
    </div>
  );
}
