import Image from "next/future/image";
import { useRouter } from "next/router";
import React from "react";
import { selectCurrentuser } from "../../features/user/user-auth-slice";
import { useAppSelector } from "../../utils/app/hook";
import BscpeLoader from "../Layouts/Loader/BscpeLoader";
import ButtonLink from "../UI/Button/Link/ButtonLink";
import ButtonStandard from "../UI/Button/Standard/ButtonStandard";
import Box from "../UI/Wrapper/Box";
import Center from "../UI/Wrapper/Center";

const SignupLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const user = useAppSelector(selectCurrentuser)
  if (user) {
    router.replace('/')
    return <BscpeLoader />
  }
  return (
    <Center>

      <Box>


        {children}


        <div>
          <ButtonLink size='small' onClick={() => router.replace('/login')} >
            <>
              Already have an account?
              <strong>Login</strong>
            </>
          </ButtonLink>
        </div>

      </Box>
    </Center>

  );
};

export default SignupLayout;
