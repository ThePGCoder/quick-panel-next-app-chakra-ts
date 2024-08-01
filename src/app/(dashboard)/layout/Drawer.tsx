import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NavMenu from "./nav-menu/NavMenu";

interface DrawerProps {
  isOpen: any;
  onClose: any;
  toggleDrawer: any;
}

const MobileDrawer: React.FC<DrawerProps> = ({ onClose, isOpen, toggleDrawer }) => {
  return (
    <>
      
        <Drawer onClose={onClose} isOpen={isOpen} placement="left">
          <DrawerOverlay />
          <DrawerContent bg={useColorModeValue("#fff", "#1a202c")}>
            <DrawerHeader>
              <Center>
                <Box pt={6} pb={6}>
                  LOGO
                </Box>
              </Center>
            </DrawerHeader>
            <Center>
              <NavMenu toggleDrawer={toggleDrawer}/>
            </Center>
          </DrawerContent>
        </Drawer>
      
    </>
  );
};

export default MobileDrawer;
