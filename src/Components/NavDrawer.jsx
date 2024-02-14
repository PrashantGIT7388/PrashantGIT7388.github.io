import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const NavDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [current, setCurrent] = useState("#home");
  return (
    <div>
      <IconButton size="large" onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="right"
      >
        <Box p={2} width={"250px"} textAlign="center" role="presentation">
          <Typography variant="h4" component={"div"}>
            Side Panel
          </Typography>
          <div id="bar">
            <div onClick={() => setCurrent("#home")}>
              {" "}
              <a href="#home">
                Home
              </a>{" "}
            </div>
            <div onClick={() => setCurrent("#about")}>
              <a href="#about">
                
                  About
                
              </a>{" "}
            </div>
            <div onClick={() => setCurrent("#skills")}>
              <a href="#skills">
              
                  Skills
           
              </a>{" "}
            </div>
            <div onClick={() => setCurrent("#projects")}>
              <a href="#projects">
                <h3 className={current === "#projects" ? "activemain" : null}>
                  Projects
                </h3>
              </a>{" "}
            </div>
            <div onClick={() => setCurrent("#contact")}>
              <a href="#contact">
                <h3 className={current === "#contact" ? "activemain" : null}>
                  Contact
                </h3>
              </a>{" "}
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
