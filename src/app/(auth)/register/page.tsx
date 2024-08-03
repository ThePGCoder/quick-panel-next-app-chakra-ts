"use client"

import { Text, Center, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Stack, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Icon } from "@iconify/react";
import CustomButton from '@/lib/components/CustomButton';
import CustomCard from '@/lib/components/CustomCard';
import { primary, secondary, lightBorder, darkBorder } from '@/lib/styles/constants';
import SocialProviders from '../components/SocialProviders';

interface RegisterProps {
}

const Register: React.FC<RegisterProps> = () => {
    const router = useRouter();
  return (
    <>
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
            type="password"
              placeholder="Password"
              borderColor={useColorModeValue(lightBorder, darkBorder)}
            />
            <InputRightElement>
              <Icon icon="mdi-eye" height={20} />
            </InputRightElement>
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
            type="password"
              placeholder="Confirm Password"
              borderColor={useColorModeValue(lightBorder, darkBorder)}
            />
            <InputRightElement>
              <Icon icon="mdi-eye" height={20} />
            </InputRightElement>
          </InputGroup>
          <Center>
            <SocialProviders />
          </Center>

          <CustomButton width="100%" onClick={() => router.push("/home")}>
            Register
          </CustomButton>
          <Center>
            <Text fontSize="sm">
              Already have an account? <Link color={useColorModeValue(primary, secondary)} href="/login">Login</Link>
            </Text>
          </Center>
        </Stack>
      </CustomCard>
    </>
  );
};

export default Register;