"use client";

import React, { ReactNode } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Middle from "@/lib/components/Middle";
import FadeIn from "@/lib/components/FadeIn";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <FadeIn>
        <Box
          backgroundImage={useColorModeValue(
            "linear-gradient(rgba(255, 255, 255, 0.66), rgba(255, 255, 255, 0.66)),url(/bg.png)",
            "linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),url(/bg.png)"
          )}
          backgroundSize="cover"
          height="100vh"
        >
          <Header />
          <Middle>{children}</Middle>
          <Footer />
        </Box>
      </FadeIn>
    </>
  );
};

export default Layout;
