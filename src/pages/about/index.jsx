import { Card } from "@mui/material";
import React from "react";
import logo from "../../assets/logo512.png";

function index() {
  return (
    <div className="h-[100vh]">
      <Card className=" w-[100%] flex justify-ceenter flex-wrap px-[50px] py-[70px]">
        <div className="flex justify-center items-center flex-col font-bold p-3 w-[150px] h-[150px] ">
          <img className="" src={logo} alt="Государственные финансы" />
          <h3> ГОСУДАРСТВЕННЫЕ ФИНАНСЫ</h3>
        </div>
        <p className="p-3 min-w-[200px] w-[700px]">
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
