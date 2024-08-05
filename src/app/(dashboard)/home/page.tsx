"use client"

import { ActiveRouteContext } from '@/lib/hooks/activeRouteContext';
import React, { useContext, useEffect } from 'react';

interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
    const { changeActiveRoute } = useContext(ActiveRouteContext);
  
  useEffect(() => {
    changeActiveRoute("Home");
  }, [])

    return (
        <>
            Home
        </>
    );
};

export default Home;