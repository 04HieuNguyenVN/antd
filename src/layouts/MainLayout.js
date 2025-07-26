import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  FormOutlined,
  EditOutlined,
  TableOutlined,
  BoxPlotOutlined,
  LayoutOutlined,
  BarsOutlined,
  AlertOutlined,
  InteractionOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false); // Trạng thái đóng/mở sidebar
  const navigate = useNavigate(); // Hook điều hướng

  // Danh sách các mục menu với icon và đường dẫn
  const menuItems = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/forms",
      icon: <FormOutlined />,
      label: "Forms",
    },
    {
      key: "/data-entry",
      icon: <EditOutlined />,
      label: "Data Entry",
    },
    {
      key: "/tables",
      icon: <TableOutlined />,
      label: "Tables",
    },
    {
      key: "/data-display",
      icon: <BoxPlotOutlined />,
      label: "Data Display",
    },
    {
      key: "/layout",
      icon: <LayoutOutlined />,
      label: "Layout",
    },
    {
      key: "/navigation",
      icon: <BarsOutlined />,
      label: "Navigation",
    },
    {
      key: "/feedback",
      icon: <AlertOutlined />,
      label: "Feedback",
    },
    {
      key: "/other",
      icon: <InteractionOutlined />,
      label: "Other Components",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar bên trái */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          Ant Demo
        </div>

        {/* Menu điều hướng chính */}
        <Menu
          theme="dark"
          defaultSelectedKeys={["/"]}
          mode="inline"
          items={menuItems}
          onClick={({ key }) => navigate(key)} // Khi click menu thì chuyển trang
        />
      </Sider>

      {/* Khu vực nội dung chính */}
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }} />
        <Content style={{ margin: "16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "#fff",
              borderRadius: 4,
            }}
          >
            {/* Outlet để render các trang con */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
