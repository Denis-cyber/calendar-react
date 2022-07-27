import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";
import { Menu, Row } from "antd";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../router";
import { useActions } from "../hooks/useActions";

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={logout}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key={1} onClick={() => navigate(RouteNames.LOGIN)}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};
