import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  FormOutlined,
  TableOutlined,
  BoxPlotOutlined,
  LayoutOutlined,
  BarsOutlined,
  AlertOutlined,
  InteractionOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false); // Trạng thái đóng/mở sidebar
  const navigate = useNavigate(); // Hook điều hướng

  // Danh sách các mục menu với icon và đường dẫn
  const menuItems = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: "Bảng điều khiển",
    },
    {
      key: "/forms",
      icon: <FormOutlined />,
      label: "Biểu mẫu",
    },
    {
      key: "/tables",
      icon: <TableOutlined />,
      label: "Bảng dữ liệu",
    },
    {
      key: "/data-display",
      icon: <BoxPlotOutlined />,
      label: "Hiển thị dữ liệu",
    },
    {
      key: "/layout",
      icon: <LayoutOutlined />,
      label: "Thành phần bố cục",
    },
    {
      key: "/navigation",
      icon: <BarsOutlined />,
      label: "Điều hướng",
    },
    {
      key: "/feedback",
      icon: <AlertOutlined />,
      label: "Phản hồi",
    },
    {
      key: "/other",
      icon: <InteractionOutlined />,
      label: "Thành phần khác",
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
          Ant Design Demo
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
