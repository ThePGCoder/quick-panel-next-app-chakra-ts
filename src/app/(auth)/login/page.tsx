"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push("/home")}>Login</Button>
    </>
  );
};

export default Login;
