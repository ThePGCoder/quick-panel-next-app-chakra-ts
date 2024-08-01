import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Text } from '@chakra-ui/react'
import { lightBorder, darkBorder } from "@/lib/styles/constants";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <Box
        width={{ base: "100%", sm: "100%", md: "calc(100% - 320px)" }}
        height={50}
        position="fixed"
        bottom={0}
        display="flex"
        justifyContent="center"
        alignItems="center"       
        borderTopWidth={1}
        borderColor={useColorModeValue(lightBorder, darkBorder)}
        ml={{ base: 0, sm: 0, md: 320 }}
      >
        <Box><Text fontSize="sm">Your Logo</Text></Box>
      </Box>
    </>
  );
};

export default Footer;
