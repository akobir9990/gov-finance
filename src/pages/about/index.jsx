import { Card } from "@mui/material";
import React from "react";
import logo from "../../assets/logo512.png";

function index() {
  return (
    <div className="h-[100vh]">
      <Card className="flex md:flex-row flex-col rounded-md">
        <div className=" p-10 flex justify-center items-center flex-col">
          <img className="" src={logo} alt="Государственные финансы" />
          <h3 className=" font-bold text-xl">ГОСУДАРСТВЕННЫЕ ФИНАНСЫ</h3>
        </div>
        <p className=" p-10 flex justify-center items-center">
          Эта программа информационных технологий и математических процессов
          пройти курс моделирования учебное пособие, подготовленное и содержащее
          этот предмет методическое пособие, видеоурок, лабораторные занятия
          включает в себя практические учебные задания и тестовую подготовку.
        </p>
      </Card>
    </div>
  );
}

export default index;
