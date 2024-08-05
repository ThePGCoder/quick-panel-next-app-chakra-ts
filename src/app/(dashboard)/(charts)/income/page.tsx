"use client";

import { incomeData } from "@/lib/data/incomeData";
import { ActiveRouteContext } from "@/lib/hooks/activeRouteContext";
import { Heading, Center } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

interface IncomeProps {}

const Income: React.FC<IncomeProps> = () => {
  const { changeActiveRoute } = useContext(ActiveRouteContext);
  
  useEffect(() => {
    changeActiveRoute("Income");
  }, [])
  return (
    <>
      <Center>
        <Heading size="md" pb={4}>
          Income For 2023 (Jan-July)
        </Heading>
      </Center>
      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart
          width={500}
          height={400}
          data={incomeData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#81E6D9"
            fill="#38B2AC"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#81E6D9"
            fill="#2C7A7B"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#81E6D9"
            fill="#234E52"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Income;
