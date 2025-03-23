import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Image, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";

const { Header, Sider, Content } = Layout;
const customBreadcrumbTitles = {
  "danh-muc": "Danh mục",
  "hanh-dong": "Hành động",
  "nguoi-dung": "Người dùng",
};
const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout className="h-screen" >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="h-screen"
        width={256}
      >
        <Image
          width={"100%"}
          height={50}
          style={{ objectFit: "contain" }}
          preview={false}
          src="https://res.cloudinary.com/drhdgw1xx/image/upload/v1706264627/gnio9s5elrbaq9fghyqp.png"
        />
        <Menu
          style={{
            height: "calc(100vh - 20px)",
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={(e) => {
            navigate(e.key);
          }}
          items={[
            {
              key: "/admin/danh-muc",
              icon: <UserOutlined />,
              label: "nav 1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            },
            {
              key: "/admin/nguoi-dung",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "/admin/hanh-dong",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            width:'auto',
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Avatar className="mr-4" size={"large"} icon={<UserOutlined />} />
        </Header>
        <Content
          style={{
            margin: "16px",
            padding: 8,
            minHeight: "calc(100vh - 64px)",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto", // Tránh tràn nội dung
          }}
        >
          <PageHeader customTitles={customBreadcrumbTitles} />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Admin;
