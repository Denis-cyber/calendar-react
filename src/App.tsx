import React, { FC, useEffect } from "react";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/Navbar";
import { Layout } from "antd";
import "./App.css";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

export const App: FC = () => {
  const { setIsAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setIsAuth(true);
    } else {
    }
  }, [setIsAuth, setUser]);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};
