"use client"

import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface SplashProps {
}

const Splash: React.FC<SplashProps> = () => {
    const router = useRouter();
    return (
        <>
            <Button onClick={() => router.push("/login")}>Login</Button>
        </>
    );
};

export default Splash;