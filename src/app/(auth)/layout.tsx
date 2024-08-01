"use client";

import React, { ReactNode } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Flex
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 100px)"
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
