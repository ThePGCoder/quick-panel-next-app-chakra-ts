import { Box, useColorModeValue, Image } from "@chakra-ui/react";
import React from "react";
import NavMenu from "./nav-menu/NavMenu";
import { darkBorder, darkGradient, lightBorder } from "@/lib/styles/constants";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <>
      <Box
        width={320}
        top={0}
        height={"100%"}
        position="fixed"
        alignItems="center"
        borderRightWidth={1}
        borderColor={useColorModeValue(lightBorder, darkBorder)}
        display={{ base: "none", sm: "none", md: "flex" }}
        flexDirection="column"
      >
        <Box pt={6} pb={6}>
          LOGO
        </Box>

        <NavMenu />
      </Box>
    </>
  );
};

export default Sidebar;
