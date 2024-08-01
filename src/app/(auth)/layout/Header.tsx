import ThemeToggle from "@/lib/components/ThemeToggle";
import { Flex } from "@chakra-ui/react";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Flex justify="flex-end" p={2}>
        <ThemeToggle />
      </Flex>
    </>
  );
};

export default Header;
