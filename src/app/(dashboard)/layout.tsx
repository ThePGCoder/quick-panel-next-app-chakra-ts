"use client"

import React, { ReactNode } from "react";
import Header from "./layout/Header";
import MobileDrawer from "./layout/Drawer";
import { Box, useDisclosure } from "@chakra-ui/react";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Header toggleDrawer={onOpen} />
      <MobileDrawer isOpen={isOpen} onClose={onClose} toggleDrawer={onClose} />
      <Sidebar />
      <Box ml={{ base: "none", sm: "none", md: 320 }} transition={"0.2s ease"} >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
