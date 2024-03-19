import React from "react";
import Row1 from "../dashboard/Row1";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Header from '../../components/Header'
import { Outlet } from "react-router-dom";
// import TopBar from '../../components/TopBar'
// import SideBar from '../../components/SideBar'

const Dashboard = () => {
  const theme = useTheme();
  return (
    <div >
{/*       
      <TopBar/>
      <SideBar/> */}
      <Row1 />
  
    </div>
  );
};

export default Dashboard;
