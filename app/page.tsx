import Box from "@mui/material/Box";
import React from "react";
import Card from "@/components/Card";

export const metadata = {
  title: 'My Profile',
}

const Home = () => {
  return (
    <Box>
      <Box 
       className="container"
         sx={{
              backgroundColor: "#141414",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
        <Card />
      </Box>
    </Box>


  );
};

export default Home;