"use client";

import CustomButton from "@/lib/components/CustomButton";
import Middle from "@/lib/components/Middle";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import Layout from "./(auth)/layout";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";

interface SplashProps {}

const Splash: React.FC<SplashProps> = () => {
  const router = useRouter();
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  useEffect(() => {
    changeActiveRoute(localStorage.getItem("Home"));
   
  }, [])
  return (
    <>
      <Layout>
        <Middle>
          <Heading>LOGO</Heading>
          <Box height={10}/>
          <CustomButton onClick={() => router.push("/login")}>Continue</CustomButton>
        </Middle>
      </Layout>
    </>
  );
};

export default Splash;
