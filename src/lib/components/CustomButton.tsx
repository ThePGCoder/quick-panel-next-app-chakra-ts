import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  width?: string;
  action?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, width, action }) => {
    
    return (
    <>
      <Button
      onClick={action}
      width={width}
        bg="linear-gradient(#38B2AC, #2C7A7B)"
        color="white"
        boxShadow={useColorModeValue("2px 2px 5px #646464","")}
        _hover={{bg: "linear-gradient(#38B2AC, #81E6D9)", color: "black"}}
      >
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
