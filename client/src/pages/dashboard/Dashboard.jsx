import React from "react";
import Row1 from "./Row1";

import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <div >


      <Row1 />
    
 
  
    </div>
  );
};

export default Dashboard;
