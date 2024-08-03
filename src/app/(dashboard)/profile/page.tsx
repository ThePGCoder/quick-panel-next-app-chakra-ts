"use client"

import CustomCard from '@/lib/components/CustomCard';
import Middle from '@/lib/components/Middle';
import { Image, Avatar, Box, Heading, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
}

const Profile: React.FC<ProfileProps> = () => {
   
        return (
          <>
            <Middle>
              <CustomCard>
                <VStack>
                <Box position="relative">
                  <Image
                    w="full"
                    h="200px"
                    src={"/bg2.jpg"}
                    objectFit="cover"
                    borderRadius="4px"
                  />
                  <Box position="absolute" bottom={"-50px"} left="calc(50% - 50px)">
                    <Avatar
                      size="xl"
                      src="/avatar.png"
                      border={useColorModeValue(
                        "4px white solid",
                        "4px #2d3748 solid"
                      )}
                      background="linear-gradient(#A0AEC0, #4A5568)"
                    />
                  </Box>
                </Box>
    
                <Text fontSize="lg" pt={50}>
                  Philip Collings
                </Text>
                <HStack>
                  <Heading size="sm">Member Since:</Heading>
                  <Text> 30-01-1977</Text>
                </HStack>
                <HStack>
                  <Heading size="sm">Position:</Heading>
                  <Text>Developer</Text>
                </HStack>
              </VStack>
              </CustomCard>
            </Middle>
          </>
        )
      
};

export default Profile;