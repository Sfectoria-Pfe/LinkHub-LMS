import React from "react";
import { Button } from "@mui/material";

const CategoryFilter = () => {
  const filterOptions = [
    { id: "All", name: "All", value: "all" },
    { id: "Admin", name: "React", value: "react" }, // Corrected value for "React"
    { id: "User", name: "Js", value: "js" }, // Corrected value for "Js"
    { id: "Manager", name: "Html", value: "html" }, // Corrected value for "Html"
    { id: "Manager", name: "Css", value: "css" }, // Corrected duplicate ID "Manger" to "Manager"
  ];

  return (
    <div>
      {filterOptions.map((item, index) => (
        <Button variant="outlined" href="#outlined-buttons"
          key={index}
          // Use MUI's Button variant for styling
          sx={{
              
            mr: 10, // Add margin-right for spacing between buttons
            mb: 1, // Add margin-bottom for spacing between rows (optional)
          }}
          onClick={() => {
            // Handle button click event here (optional)
            console.log("Clicked:", item.name); // Example usage
          }}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
