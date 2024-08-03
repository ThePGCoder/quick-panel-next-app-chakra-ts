"use client"

import Middle from "@/lib/components/Middle";
import { developerData } from "@/lib/data/developerData";
import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis, Legend } from 'recharts';
interface FrameworksProps {}


const data = [
  {
    subject: 'React',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Flutter',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Vue',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Angular',
    A: 140,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Svelte',
    A: 125,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Vanila',
    A: 115,
    B: 85,
    fullMark: 150,
  },
];



const Frameworks: React.FC<FrameworksProps> = () => {
  return (
    <>
      
        <Box p={4}>
          <Center>
            <Heading size="md" pb={4}>
              Preferred Framework
            </Heading>
          </Center>
          <ResponsiveContainer width="100%" aspect={2} >
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
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
