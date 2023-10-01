'use client';
import React from "react";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import Display from "../../components/Display";
import Addbutton from "../../components/Addbutton";





const Dashboard = () => {
  return (
    <div className="m-4 flex flex-col">
      <Heading />
      <div className="flex flex-row">
      <Input  />
      <Addbutton />
      </div>
      <Display />
    </div>
  );
};

export default Dashboard;
