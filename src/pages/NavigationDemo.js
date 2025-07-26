import React from "react";
import {
  // Layout,
  Button,
  Steps,
  Menu,
  Pagination,
  Dropdown,
  Breadcrumb,
  Typography,
  Space,
  Card,
  Divider,
} from "antd";
import { UserOutlined, DownOutlined, HomeOutlined } from "@ant-design/icons";

const { Title } = Typography;
// const { Header, Sider, Content } = Layout;

const NavigationDemo = () => {
  // Menu điều hướng
  const menuItems = [
    {
      key: "1",
      label: "Trang chủ",
    },
    {
      key: "2",
      label: "Giới thiệu",
    },
    {
      key: "3",
      label: "Liên hệ",
    },
  ];

  // Danh sách các mục trong dropdown
  const dropdownItems = [
    {
      key: "1",
      label: "Mục 1",
    },
    {
      key: "2",
      label: "Mục 2",
    },
    {
      key: "3",
      label: "Mục 3",
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {/* Tiêu đề trang */}
      <Title level={2}>Thành phần Điều hướng</Title>

      {/* Phần menu điều hướng */}
      <Divider orientation="left">Menu</Divider>
      <Card>
        <Menu
          mode="horizontal"
          items={menuItems}
          style={{ marginBottom: "20px" }}
        />
        <Menu mode="inline" items={menuItems} style={{ width: 256 }} />
      </Card>

      {/* Breadcrumb: Điều hướng đường dẫn */}
      <Divider orientation="left">Đường dẫn (Breadcrumb)</Divider>
      <Card>
        <Breadcrumb
          items={[
            {
              href: "",
              title: <HomeOutlined />,
            },
            {
              href: "",
              title: (
                <>
                  <UserOutlined />
                  <span>Danh sách ứng dụng</span>
                </>
              ),
            },
            {
              title: "Ứng dụng",
            },
          ]}
        />
      </Card>

      {/* Phân trang */}
      <Divider orientation="left">Phân trang</Divider>
      <Card>
        <Pagination defaultCurrent={1} total={50} />
        <br />
        <Pagination
          showSizeChanger
          showQuickJumper
          total={500}
          showTotal={(total) => `Tổng cộng ${total} mục`}
        />
      </Card>

      {/* Dropdown: menu thả xuống */}
      <Divider orientation="left">Menu Thả Xuống (Dropdown)</Divider>
      <Card>
        <Space>
          <Dropdown menu={{ items: dropdownItems }}>
            <Button>
              <span>
                Di chuột để mở <DownOutlined />
              </span>
            </Button>
          </Dropdown>
          <Dropdown menu={{ items: dropdownItems }} placement="bottomRight">
            <Button>Phía dưới bên phải</Button>
          </Dropdown>
        </Space>
      </Card>

      {/* Các bước (Steps) */}
      <Divider orientation="left">Các bước (Steps)</Divider>
      <Card>
        <Steps
          current={1}
          items={[
            {
              title: "Hoàn thành",
              description: "Mô tả bước đã hoàn thành.",
            },
            {
              title: "Đang tiến hành",
              description: "Mô tả bước đang làm.",
              subTitle: "Còn lại 00:00:08",
            },
            {
              title: "Chờ xử lý",
              description: "Mô tả bước chờ.",
            },
          ]}
        />
      </Card>
    </Space>
  );
};

export default NavigationDemo;
