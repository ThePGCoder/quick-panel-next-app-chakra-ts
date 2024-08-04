"use client";

import CustomButton from "@/lib/components/CustomButton";
import CustomCard from "@/lib/components/CustomCard";
import {
  Center,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  Link,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Icon } from "@iconify/react";
import {
  darkBorder,
  lightBorder,
  primary,
  secondary,
} from "@/lib/styles/constants";
import SocialProviders from "../components/SocialProviders";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const router = useRouter();
  return (
    <>
      <Box width="85%">
        <CustomCard>
          <Stack spacing={4}>
            <Center>
              <Heading>LOGO</Heading>
            </Center>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon
                  icon="mdi:email"
                  height={20}
                  color={useColorModeValue(primary, secondary)}
                />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email"
                borderColor={useColorModeValue(lightBorder, darkBorder)}
              />
            </InputGroup>
  
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon
                  icon="mdi:lock"
                  height={20}
                  color={useColorModeValue(primary, secondary)}
                />
              </InputLeftElement>
              <Input
                placeholder="Password"
                type="password"
                borderColor={useColorModeValue(lightBorder, darkBorder)}
              />
              <InputRightElement>
                <Icon icon="mdi-eye" height={20} />
              </InputRightElement>
            </InputGroup>
            <Center>
              <Text fontSize="sm">
                <Link color={useColorModeValue(primary, secondary)}>
                  Forgot Password?
                </Link>
              </Text>
            </Center>
            <Center>
              <SocialProviders />
            </Center>
  
            <CustomButton width="100%" onClick={() => router.push("/home")}>
              Login
            </CustomButton>
            <Center>
              <Text fontSize="sm">
                Don&apos;t have an account?{" "}
                <Link
                  color={useColorModeValue(primary, secondary)}
                  href="/register"
                >
                  Register
                </Link>
              </Text>
            </Center>
          </Stack>
        </CustomCard>
      </Box>
    </>
  );
};

export default Login;
