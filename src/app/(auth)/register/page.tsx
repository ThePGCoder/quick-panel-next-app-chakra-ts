import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface RegisterProps {
}

const Register: React.FC<RegisterProps> = () => {
    const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push("/home")}>Register</Button>
    </>
  );
};

export default Register;