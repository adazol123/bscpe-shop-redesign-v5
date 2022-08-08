import { CogIcon } from "@heroicons/react/outline";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  InputHTMLAttributes,
  ReactElement,
  useEffect,
} from "react";
import { useState } from "react";
import Layout from "../components/Layouts/layout";
import ButtonStandard from "../components/UI/Button/Standard/ButtonStandard";
import Input from "../components/UI/Input/Input";
import { UserAuth } from "../utils/context/Account/Auth";
import Checkbox from "./../components/UI/Checkbox/Checkbox";
import { NextPageWithLayout } from "./_app";
const Login: NextPageWithLayout = () => {
  const [client, setClient] = useState<{
    email: string;
    password: string;
    loading: boolean;
    error: any;
  }>({
    email: "",
    password: "",
    loading: false,
    error: undefined,
  });
  const { signin, logout, user } = UserAuth();

  const login = async (e: any) => {
    setClient({
      ...client,
      loading: true,
      error: undefined,
    });
    e.preventDefault();
    try {
      if (client.email || client.password) {
        setClient({ ...client, loading: true });
        await signin!(client.email, client.password);
        console.log("[Success] : > ", client);
        setTimeout(() => {
          setClient({
            email: "",
            password: "",
            loading: false,
            error: undefined,
          });
        }, 2000);
      } else {
        throw new Error("Email and password is required");
      }
    } catch (error: any) {
      setClient({
        ...client,
        loading: false,
        error: error?.message,
      });
      setTimeout(() => {
        setClient({
          ...client,
          error: undefined,
        });
      }, 5000);
    }
  };

  let router = useRouter()
  useEffect(() => {
    if (user) router.replace('/')
  }, [user])
  return (
    <div>
      {user ? (
        <div className="grid place-content-center p-4 bg-black/5 gap-2">
          <button
            onClick={() => {
              setClient({
                ...client,
                loading: true,
              });
              logout!().then(() =>
                setClient({
                  ...client,
                  loading: false,
                })
              );
            }}
          >
            {client.loading ? <Spinner className="animate-spin" /> : ""}
          </button>
        </div>
      ) : (
        <>
          <span>Login</span>
          <form
            onSubmit={login}
            className="grid place-content-center p-4 bg-black/5 gap-2"
          >
            <span className="text-[0.6em] text-rose-400 h-3">
              {client.error && client.error}
            </span>
            <Input
              type="email"
              label="Email"
              defaultValue={client.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setClient({ ...client, email: e.target.value })
              }
            />
            <Input
              type="password"
              label="Password"
              defaultValue={client.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setClient({ ...client, password: e.target.value })
              }
            />
            <Checkbox onChange={(e) => console.log(e.target.checked)} />
            <ButtonStandard type="outline">
              {client.loading ? <Spinner className="animate-spin" /> : "Login"}
            </ButtonStandard>
          </form>
        </>
      )}
    </div>
  );
};

function Spinner(props: React.ComponentProps<"svg">): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animante-spin"
      {...props}
    >
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
        fill="currentColor"
      />
      <path
        d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
        fill="currentColor"
      />
    </svg>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
      {/* <NestedLayout>{page}</NestedLayout> */}
    </Layout>
  );
};

export default Login;
