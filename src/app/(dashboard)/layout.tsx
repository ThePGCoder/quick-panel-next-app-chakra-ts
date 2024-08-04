"use client";

import React, { ReactNode } from "react";
import Header from "./layout/Header";
import MobileDrawer from "./layout/Drawer";
import { Box, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";
import FadeIn from "@/lib/components/FadeIn";

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
      <FadeIn>
        <Box
          ml={{ base: "none", sm: "none", md: 320 }}
          transition={"0.2s ease"}
          background={useColorModeValue(
            "radial-gradient(circle, #ffffff 33%, transparent 66%)",
            "radial-gradient(circle, #3b4863 0%, transparent 66%)"
          )}
          height="calc(100vh - 100px)"
          p={4}
        >
          {children}
        </Box>
      </FadeIn>
      <Footer />
    </>
  );
};

export default Layout;
