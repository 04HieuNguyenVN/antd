import React, { useState } from "react";
import {
  Layout,
  Card,
  Divider,
  Row,
  Col,
  Space,
  Typography,
  Steps,
  Affix,
  Anchor,
  BackTop,
  ConfigProvider,
  Flex,
  Button,
  Input,
  Collapse,
  Tabs,
  Breadcrumb,
  Menu,
  Dropdown,
  Pagination,
  Empty,
  Result,
  Skeleton,
  Spin,
} from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
  HomeOutlined,
  UpOutlined,
  DownOutlined,
  SettingOutlined,
  FileOutlined,
  TeamOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
const { Title, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const style = {
  background: "#0092ff",
  padding: "8px 0",
  color: "white",
  textAlign: "center",
};

const LayoutComponentsDemo = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  // Menu items cho Navigation
  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Trang chủ",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Người dùng",
      children: [
        { key: "21", label: "Danh sách" },
        { key: "22", label: "Thêm mới" },
      ],
    },
    {
      key: "3",
      icon: <SettingOutlined />,
      label: "Cài đặt",
    },
  ];

  // Dropdown items
  const dropdownItems = [
    { key: "1", label: "Tùy chọn 1", icon: <UserOutlined /> },
    { key: "2", label: "Tùy chọn 2", icon: <SettingOutlined /> },
    { type: "divider" },
    { key: "3", label: "Đăng xuất", icon: <LoadingOutlined /> },
  ];

  // Tabs items
  const tabItems = [
    {
      key: "1",
      label: "Tab 1",
      children: (
        <div>
          <p>Nội dung của Tab 1</p>
          <Button type="primary">Hành động</Button>
        </div>
      ),
    },
    {
      key: "2",
      label: "Tab 2",
      children: (
        <div>
          <p>Nội dung của Tab 2</p>
          <Input placeholder="Nhập nội dung..." />
        </div>
      ),
    },
    {
      key: "3",
      label: "Tab 3",
      children: <Empty description="Tab này đang trống" />,
    },
  ];

  // Collapse items
  const collapseItems = [
    {
      key: "1",
      label: "Panel 1",
      children: <p>Nội dung của panel 1 với nhiều thông tin chi tiết.</p>,
    },
    {
      key: "2",
      label: "Panel 2",
      children: (
        <div>
          <p>Panel 2 có nội dung phức tạp hơn:</p>
          <ul>
            <li>Mục 1</li>
            <li>Mục 2</li>
            <li>Mục 3</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <Layout>
      {/* Header của layout */}
      <Header style={{ color: "white", textAlign: "center", fontSize: "24px" }}>
        Bố cục Ant Design
      </Header>

      {/* Nội dung chính */}
      <Content style={{ padding: "24px 50px" }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={2}>Các thành phần bố cục</Title>

          {/* Hệ thống lưới cơ bản */}
          <Divider orientation="left">Hệ thống lưới (Row và Col)</Divider>
          <Card>
            {/* <Text>Hệ thống lưới gồm 24 cột.</Text> */}
            <Divider>Lưới cơ bản</Divider>
            <Row>
              <Col span={24}>
                <div style={style}>col-24</div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div style={style}>col-12</div>
              </Col>
              <Col span={12}>
                <div style={{ ...style, background: "#00a0e9" }}>col-12</div>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <div style={style}>col-8</div>
              </Col>
              <Col span={8}>
                <div style={{ ...style, background: "#00a0e9" }}>col-8</div>
              </Col>
              <Col span={8}>
                <div style={style}>col-8</div>
              </Col>
            </Row>

            {/* Gutter là khoảng cách giữa các cột */}
            <Divider>Lưới có khoảng cách (Gutter)</Divider>
            <Row gutter={16}>
              <Col span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col span={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
          </Card>

          {/* Responsive Grid: tự động co giãn theo kích thước màn hình */}
          <Divider orientation="left">Lưới phản hồi (Responsive)</Divider>
          <Card>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div style={style}>Hộp phản hồi</div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div style={style}>Hộp phản hồi</div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div style={style}>Hộp phản hồi</div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div style={style}>Hộp phản hồi</div>
              </Col>
            </Row>
          </Card>

          {/* Căn giữa Grid theo chiều ngang và dọc */}
          <Divider orientation="left">Canh giữa dòng (Justify / Align)</Divider>
          <Card>
            <Row
              justify="center"
              align="middle"
              style={{ height: "100px", border: "1px dashed #aaa" }}
            >
              <Col>
                <div style={style}>Nội dung ở giữa</div>
              </Col>
            </Row>
          </Card>

          {/* Offset (lùi cột) và Order (thứ tự hiển thị) */}
          <Divider orientation="left">Dịch vị trí và Thứ tự</Divider>
          <Card>
            <Row gutter={16}>
              <Col span={6} offset={6}>
                <div style={style}>Dịch sang 6 cột</div>
              </Col>
              <Col span={6} order={1}>
                <div style={style}>Thứ tự 1</div>
              </Col>
              <Col span={6} order={0}>
                <div style={style}>Thứ tự 0</div>
              </Col>
            </Row>
          </Card>

          {/* Thành phần Space - tạo khoảng cách giữa các phần tử */}
          <Divider orientation="left">Thành phần khoảng cách (Space)</Divider>
          <Card>
            <Text>Ngang:</Text>
            <Space>
              <button>Nút</button>
              <button>Nút</button>
            </Space>
            <Divider />
            <Text>Dọc:</Text>
            <Space direction="vertical">
              <button>Nút</button>
              <button>Nút</button>
            </Space>
          </Card>
          <Divider orientation="left">Steps</Divider>
          <Steps
            items={[
              {
                title: "Login",
                status: "finish",
                icon: <UserOutlined />,
              },
              {
                title: "Verification",
                status: "finish",
                icon: <SolutionOutlined />,
              },
              {
                title: "Pay",
                status: "process",
                icon: <LoadingOutlined />,
              },
              {
                title: "Done",
                status: "wait",
                icon: <SmileOutlined />,
              },
            ]}
          />

          {/* Navigation Components */}
          <Divider orientation="left">Navigation Components</Divider>
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Text strong>Breadcrumb:</Text>
                <Breadcrumb
                  items={[
                    { href: "", title: <HomeOutlined /> },
                    { href: "", title: "Trang chủ" },
                    { href: "", title: "Danh sách" },
                    { title: "Chi tiết" },
                  ]}
                />
              </Col>
              <Col span={12}>
                <Text strong>Dropdown Menu:</Text>
                <br />
                <Dropdown
                  menu={{ items: dropdownItems }}
                  placement="bottomLeft"
                >
                  <Button>
                    Tùy chọn <DownOutlined />
                  </Button>
                </Dropdown>
              </Col>
            </Row>

            <Divider />

            <Text strong>Menu Navigation:</Text>
            <Menu
              mode="horizontal"
              items={menuItems}
              style={{ marginTop: 8 }}
            />

            <Divider />

            <Text strong>Pagination:</Text>
            <Pagination
              current={1}
              total={50}
              showSizeChanger
              showQuickJumper
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} của ${total} mục`
              }
            />
          </Card>

          {/* Container Components */}
          <Divider orientation="left">Container Components</Divider>
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Text strong>Tabs:</Text>
                <Tabs
                  activeKey={activeTab}
                  onChange={setActiveTab}
                  items={tabItems}
                />
              </Col>
              <Col span={12}>
                <Text strong>Collapse:</Text>
                <Collapse items={collapseItems} />
              </Col>
            </Row>
          </Card>

          {/* Flex Layout */}
          <Divider orientation="left">Flex Layout</Divider>
          <Card>
            <Text strong>Flex Container:</Text>
            <Flex gap="middle" wrap="wrap" style={{ marginTop: 16 }}>
              <Button type="primary">Button 1</Button>
              <Button>Button 2</Button>
              <Button type="dashed">Button 3</Button>
              <Button type="link">Button 4</Button>
            </Flex>

            <Divider />

            <Text strong>Flex với justify và align:</Text>
            <Flex
              justify="space-between"
              align="center"
              style={{
                height: 80,
                background: "#f5f5f5",
                padding: 16,
                marginTop: 16,
              }}
            >
              <div>Left</div>
              <div>Center</div>
              <div>Right</div>
            </Flex>
          </Card>

          {/* Anchor và Affix */}
          <Divider orientation="left">Anchor & Affix</Divider>
          <Card>
            <Row gutter={16}>
              <Col span={8}>
                <Affix offsetTop={10}>
                  <Button type="primary" icon={<UpOutlined />}>
                    Affix Button
                  </Button>
                </Affix>
              </Col>
              <Col span={16}>
                <Anchor
                  direction="horizontal"
                  items={[
                    { key: "part-1", href: "#part-1", title: "Phần 1" },
                    { key: "part-2", href: "#part-2", title: "Phần 2" },
                    { key: "part-3", href: "#part-3", title: "Phần 3" },
                  ]}
                />
              </Col>
            </Row>
          </Card>

          {/* Loading & Empty States */}
          <Divider orientation="left">Loading & Empty States</Divider>
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Text strong>Skeleton Loading:</Text>
                <Skeleton active />
              </Col>
              <Col span={8}>
                <Text strong>Spin Loading:</Text>
                <Spin size="large">
                  <div
                    style={{ height: 100, background: "#f5f5f5", padding: 20 }}
                  >
                    Nội dung đang tải...
                  </div>
                </Spin>
              </Col>
              <Col span={8}>
                <Text strong>Empty State:</Text>
                <Empty
                  description="Không có dữ liệu"
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
              </Col>
            </Row>
          </Card>

          {/* Result Pages */}
          <Divider orientation="left">Result Pages</Divider>
          <Card>
            <Result
              status="success"
              title="Thành công!"
              subTitle="Thao tác đã được thực hiện thành công."
              extra={[
                <Button type="primary" key="console">
                  Tiếp tục
                </Button>,
                <Button key="buy">Quay lại</Button>,
              ]}
            />
          </Card>

          {/* ConfigProvider Demo */}
          <Divider orientation="left">Theme Configuration</Divider>
          <Card>
            <Text strong>Custom Theme với ConfigProvider:</Text>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#00b96b",
                  borderRadius: 2,
                },
              }}
            >
              <Space style={{ marginTop: 16 }}>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Input placeholder="Custom themed input" />
              </Space>
            </ConfigProvider>
          </Card>

          {/* BackTop */}
          <BackTop>
            <div
              style={{
                height: 40,
                width: 40,
                lineHeight: "40px",
                borderRadius: 4,
                backgroundColor: "#1677ff",
                color: "#fff",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              <UpOutlined />
            </div>
          </BackTop>
        </Space>
      </Content>

      {/* Footer của layout */}
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Được phát triển bởi bạn
      </Footer>
    </Layout>
  );
};

export default LayoutComponentsDemo;
