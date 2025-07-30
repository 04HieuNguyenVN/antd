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
import "../styles/layouts/MainLayout.css";

const { Header, Sider, Content } = Layout;

interface MenuItem {
  key: string;
  icon: React.ReactNode;
  label: string;
}

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false); // Trạng thái đóng/mở sidebar
  const navigate = useNavigate(); // Hook điều hướng

  // Danh sách các mục menu với icon và đường dẫn
  const menuItems: MenuItem[] = [
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
    {
      key: "/amis-editor",
      icon: <EditOutlined />,
      label: "Amis Editor",
    },
  ];

  return (
    <Layout className="main-layout">
      {/* Sidebar bên trái */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="main-layout__logo">Ant Demo</div>

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
        <Header className="main-layout__header" />
        <Content className="main-layout__content">
          <div className="main-layout__content-wrapper">
            {/* Outlet để render các trang con */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
