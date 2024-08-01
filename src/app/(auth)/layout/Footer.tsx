import { Flex } from "@chakra-ui/react";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <Flex position="fixed" bottom={0} justifyContent="center" w="100%">
        Footer
      </Flex>
    </>
  );
};

export default Footer;
