"use client"

import { developerData } from "@/lib/data/developerData";
import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis, Legend } from 'recharts';
interface FrameworksProps {}

const Frameworks: React.FC<FrameworksProps> = () => {
  return (
    <>
      
        <Box p={4} height="calc(100vh - 100px)">
          <Center>
            <Heading size="md" pb={4}>
              Preferred Framework
            </Heading>
          </Center>
          <ResponsiveContainer width="100%" aspect={2} >
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={developerData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="Team A" dataKey="A" stroke="#90CDF4" fill="#3182CE" fillOpacity={0.6} />
              <Radar name="Team B" dataKey="B" stroke="#FBB6CE" fill="#D53F8C" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
        </ResponsiveContainer>
        </Box>
      
    </>
  );
};

export default Frameworks;
