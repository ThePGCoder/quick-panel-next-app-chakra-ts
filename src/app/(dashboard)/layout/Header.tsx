import ThemeToggle from "@/lib/components/ThemeToggle";
import { lightBorder, darkBorder } from "@/lib/styles/constants";
import { Box, IconButton, Heading, useColorModeValue } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface HeaderProps {
  toggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <>
      <Box
        width="calc(100%-320px)"
        height={50}
        display="flex"
        justifyContent={{
          base: "space-between",
          sm: "space-between",
          md: "flex-end",
        }}
        alignItems="center"
        borderBottomWidth={1}
        borderColor={useColorModeValue(lightBorder, darkBorder)}
        marginLeft={{ base: 0, sm: 0, md: 320 }}
        pl={2}
        pr={2}
      >
        <Box display={{ md: "none" }}>
          <IconButton aria-label="drawer-button" onClick={toggleDrawer} size="sm">
            <Icon icon="ri:menu-3-line" height={20} />
          </IconButton>
        </Box>
        <Box
          alignItems="center"
          display={{ base: "flex", sm: "flex", md: "none" }}
        >
          
          <Heading size="sm">LOGO</Heading>
        
        </Box>
        
        <ThemeToggle />
      </Box>
    </>
  );
};

export default Header;
