"use client"

import { ActiveRouteContext } from '@/lib/hooks/activeRouteContext';
import React, { useContext, useEffect } from 'react';

interface AboutProps {
}

const About: React.FC<AboutProps> = () => {
    const { changeActiveRoute } = useContext(ActiveRouteContext);
  
  useEffect(() => {
    changeActiveRoute("About");
  }, [])
    return (
        <>
            About
        </>
    );
};

export default About;