import React, { useState } from "react";
import "../styles/pages/LayoutComponentsDemo.css";
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
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { Panel } = Collapse;

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
    { type: "divider" as const },
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
      <Header className="layout-header">Bố cục Ant Design</Header>

      {/* Nội dung chính */}
      <Content className="layout-content">
        <Space direction="vertical" size="large" className="layout-space-full">
          <Title level={2}>Các thành phần bố cục</Title>

          {/* Hệ thống lưới cơ bản */}
          <Divider orientation="left">Hệ thống lưới (Row và Col)</Divider>
          <Card>
            {/* <Text>Hệ thống lưới gồm 24 cột.</Text> */}
            <Divider>Lưới cơ bản</Divider>
            <Row>
              <Col span={24}>
                <div className="layout-grid-style">col-24</div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div className="layout-grid-style">col-12</div>
              </Col>
              <Col span={12}>
                <div className="layout-grid-style-alt">col-12</div>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <div className="layout-grid-style">col-8</div>
              </Col>
              <Col span={8}>
                <div className="layout-grid-style-alt">col-8</div>
              </Col>
              <Col span={8}>
                <div className="layout-grid-style">col-8</div>
              </Col>
            </Row>

            {/* Gutter là khoảng cách giữa các cột */}
            <Divider>Lưới có khoảng cách (Gutter)</Divider>
            <Row gutter={16}>
              <Col span={6}>
                <div className="layout-grid-style">col-6</div>
              </Col>
              <Col span={6}>
                <div className="layout-grid-style">col-6</div>
              </Col>
              <Col span={6}>
                <div className="layout-grid-style">col-6</div>
              </Col>
              <Col span={6}>
                <div className="layout-grid-style">col-6</div>
              </Col>
            </Row>
          </Card>

          {/* Responsive Grid: tự động co giãn theo kích thước màn hình */}
          <Divider orientation="left">Lưới phản hồi (Responsive)</Divider>
          <Card>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className="layout-grid-style">Hộp phản hồi</div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className="layout-grid-style">Hộp phản hồi</div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className="layout-grid-style">Hộp phản hồi</div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <div className="layout-grid-style">Hộp phản hồi</div>
              </Col>
            </Row>
          </Card>

          {/* Căn giữa Grid theo chiều ngang và dọc */}
          <Divider orientation="left">Canh giữa dòng (Justify / Align)</Divider>
          <Card>
            <Row justify="center" align="middle" className="demo-content">
              <Col>
                <div className="layout-grid-style">Nội dung ở giữa</div>
              </Col>
            </Row>
          </Card>

          {/* Offset (lùi cột) và Order (thứ tự hiển thị) */}
          <Divider orientation="left">Dịch vị trí và Thứ tự</Divider>
          <Card>
            <Row gutter={16}>
              <Col span={6} offset={6}>
                <div className="layout-grid-style">Dịch sang 6 cột</div>
              </Col>
              <Col span={6} order={1}>
                <div className="layout-grid-style">Thứ tự 1</div>
              </Col>
              <Col span={6} order={0}>
                <div className="layout-grid-style">Thứ tự 0</div>
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
                <Breadcrumb>
                  <Breadcrumb.Item href="">
                    <HomeOutlined />
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="">Trang chủ</Breadcrumb.Item>
                  <Breadcrumb.Item href="">Danh sách</Breadcrumb.Item>
                  <Breadcrumb.Item>Chi tiết</Breadcrumb.Item>
                </Breadcrumb>
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
              className="margin-top-8"
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
                <Collapse>
                  {collapseItems.map((item) => (
                    <Panel header={item.label} key={item.key}>
                      {item.children}
                    </Panel>
                  ))}
                </Collapse>
              </Col>
            </Row>
          </Card>

          {/* Flex Layout (Using Row/Col instead of Flex component) */}
          <Divider orientation="left">Flex Layout (Row/Col)</Divider>
          <Card>
            <Text strong>Flex-like layout với Row/Col:</Text>
            <Row gutter={16} className="margin-top-16">
              <Col>
                <Button type="primary">Button 1</Button>
              </Col>
              <Col>
                <Button>Button 2</Button>
              </Col>
              <Col>
                <Button type="dashed">Button 3</Button>
              </Col>
              <Col>
                <Button type="link">Button 4</Button>
              </Col>
            </Row>

            <Divider />

            <Text strong>
              Layout với justify và align (sử dụng CSS flexbox):
            </Text>
            <div className="flex-layout-demo">
              <div>Left</div>
              <div>Center</div>
              <div>Right</div>
            </div>
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
                <Anchor>
                  <Anchor.Link href="#part-1" title="Phần 1" />
                  <Anchor.Link href="#part-2" title="Phần 2" />
                  <Anchor.Link href="#part-3" title="Phần 3" />
                </Anchor>
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
                  <div className="form-content">Nội dung đang tải...</div>
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
            <Text strong>
              ConfigProvider Demo (v4 không hỗ trợ custom theme):
            </Text>
            <ConfigProvider>
              <Space className="margin-top-16">
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Input placeholder="Input với ConfigProvider" />
              </Space>
            </ConfigProvider>
          </Card>

          {/* BackTop */}
          <BackTop>
            <div className="backtop-button">
              <UpOutlined />
            </div>
          </BackTop>
        </Space>
      </Content>

      {/* Footer của layout */}
      <Footer className="layout-footer">
        Ant Design ©{new Date().getFullYear()} Được phát triển bởi bạn
      </Footer>
    </Layout>
  );
};

export default LayoutComponentsDemo;
