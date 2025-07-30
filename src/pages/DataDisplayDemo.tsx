import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {
  Table,
  Space,
  Card,
  Typography,
  Divider,
  List,
  Avatar,
  Tooltip,
  Radio,
  Badge,
  Tag,
  Timeline,
  Tree,
  Carousel,
  Image,
  Statistic,
  Descriptions,
  Empty,
  Popover,
  Tabs,
  Collapse,
  Anchor,
  Segmented,
  Row,
  Col,
  Alert,
  Affix,
  BackTop,
  Button,
} from "antd";
import {
  InfoCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  ClockCircleOutlined,
  UserOutlined,
  CaretRightOutlined,
  EyeOutlined,
  CalendarOutlined,
  TeamOutlined,
  StarOutlined,
  HeartOutlined,
  LikeOutlined,
  ArrowUpOutlined,
  QuestionCircleOutlined,
  ShareAltOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const positionOptions = ["top", "bottom", "both"] as const;
const alignOptions = ["start", "center", "end"] as const;

type PaginationPosition = (typeof positionOptions)[number];
type PaginationAlign = (typeof alignOptions)[number];

const DataDisplayDemo: React.FC = () => {
  const navigate = useNavigate();
  const tableData = useSelector((state: RootState) => state.tables.data);

  // State cho pagination
  const [position, setPosition] = useState<PaginationPosition>("bottom");
  const [align, setAlign] = useState<PaginationAlign>("center");
  const [activeTab, setActiveTab] = useState("1");

  // Dữ liệu cho Tree
  const treeData = [
    {
      title: "Công ty ABC",
      key: "0-0",
      icon: <TeamOutlined />,
      children: [
        {
          title: "Phòng IT",
          key: "0-0-0",
          icon: <UserOutlined />,
          children: [
            {
              title: "Frontend Developer",
              key: "0-0-0-0",
              icon: <UserOutlined />,
            },
            {
              title: "Backend Developer",
              key: "0-0-0-1",
              icon: <UserOutlined />,
            },
          ],
        },
        {
          title: "Phòng Marketing",
          key: "0-0-1",
          icon: <UserOutlined />,
          children: [
            {
              title: "Marketing Manager",
              key: "0-0-1-0",
              icon: <UserOutlined />,
            },
            {
              title: "Content Creator",
              key: "0-0-1-1",
              icon: <UserOutlined />,
            },
          ],
        },
      ],
    },
  ];

  // Dữ liệu cho Timeline
  const timelineData = [
    {
      color: "green",
      children: (
        <div>
          <Text strong>Dự án hoàn thành</Text>
          <br />
          <Text type="secondary">2024-01-15 09:30</Text>
          <br />
          <Text>Hoàn thành phát triển tính năng đăng nhập</Text>
        </div>
      ),
    },
    {
      color: "blue",
      children: (
        <div>
          <Text strong>Code review</Text>
          <br />
          <Text type="secondary">2024-01-10 14:20</Text>
          <br />
          <Text>Review code cho module thanh toán</Text>
        </div>
      ),
    },
    {
      color: "red",
      children: (
        <div>
          <Text strong>Bug fix</Text>
          <br />
          <Text type="secondary">2024-01-05 16:45</Text>
          <br />
          <Text>Sửa lỗi hiển thị trên mobile</Text>
        </div>
      ),
    },
  ];

  // Cấu hình các cột của bảng
  const columns = [
    {
      title: (
        <Tooltip title="Họ và tên đầy đủ của người dùng">
          <span>
            Họ tên{" "}
            <InfoCircleOutlined style={{ marginLeft: 4, color: "#1890ff" }} />
          </span>
        </Tooltip>
      ),
      dataIndex: "name",
      key: "name",
      render: (text: any) => (
        <Tooltip title={`Xem thông tin chi tiết của ${text}`}>
          <a href="#!">{text}</a>
        </Tooltip>
      ),
    },
    {
      title: (
        <Tooltip title="Tuổi của người dùng (tính theo năm)">
          <span>
            Tuổi{" "}
            <InfoCircleOutlined style={{ marginLeft: 4, color: "#1890ff" }} />
          </span>
        </Tooltip>
      ),
      dataIndex: "age",
      key: "age",
      render: (age: number) => (
        <Tooltip title={`${age} tuổi`}>
          <span>{age}</span>
        </Tooltip>
      ),
    },
    {
      title: (
        <Tooltip title="Địa chỉ hiện tại của người dùng">
          <span>
            Địa chỉ{" "}
            <InfoCircleOutlined style={{ marginLeft: 4, color: "#1890ff" }} />
          </span>
        </Tooltip>
      ),
      dataIndex: "address",
      key: "address",
      render: (address: string) => (
        <Tooltip title={`Địa chỉ đầy đủ: ${address}`}>
          <span>{address}</span>
        </Tooltip>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Tooltip title={`Xem chi tiết thông tin của ${record.name}`}>
            <Button
              type="link"
              icon={<EyeOutlined />}
              onClick={() => navigate(`/item/${record.key}`)}
            >
              Chi tiết
            </Button>
          </Tooltip>
          <Tooltip title={`Chỉnh sửa thông tin của ${record.name}`}>
            <Button
              type="link"
              icon={<EditOutlined />}
              onClick={() => navigate(`/item/${record.key}`)}
            >
              Chỉnh sửa
            </Button>
          </Tooltip>
          <Tooltip title={`Xóa ${record.name} khỏi danh sách`} color="red">
            <Button
              type="link"
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                // Có thể thêm confirm dialog ở đây
                console.log("Delete user:", record.key);
              }}
            >
              Xóa
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <BackTop />
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {/* Tiêu đề chính */}
        <Alert
          message="Data Display Components"
          description="Showcase các component hiển thị dữ liệu từ Ant Design"
          type="info"
          showIcon
          closable
        />

        <Tooltip title="Trang demo các thành phần hiển thị dữ liệu từ Ant Design">
          <Title level={2}>
            <EyeOutlined style={{ marginRight: 8 }} />
            Thành phần Hiển thị Dữ liệu
            <InfoCircleOutlined
              style={{ marginLeft: 8, fontSize: "16px", color: "#1890ff" }}
            />
          </Title>
        </Tooltip>

        {/* Statistics */}
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="Tổng số users"
                value={tableData.length}
                prefix={<UserOutlined />}
                suffix="người"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Độ tuổi trung bình"
                value={31.5}
                precision={1}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="tuổi"
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Hoạt động"
                value={93}
                suffix="/ 100"
                valueStyle={{ color: "#cf1322" }}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic.Countdown
                title="Countdown"
                value={Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30}
                format="HH:mm:ss:SSS"
              />
            </Card>
          </Col>
        </Row>

        {/* Tabs chứa các component khác nhau */}
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane
            tab={
              <span>
                <FileTextOutlined />
                Bảng & Danh sách
              </span>
            }
            key="1"
          >
            {/* Phần bảng */}
            <Divider orientation="left">
              <Tooltip title="Ví dụ về cách sử dụng Table component">
                Ví dụ Bảng với Badge và Tag
              </Tooltip>
            </Divider>

            <Card>
              <Table
                columns={[
                  ...columns.slice(0, 3),
                  {
                    title: "Status",
                    key: "status",
                    render: (_: any, record: any, index: number) => (
                      <Space>
                        <Badge
                          status={index % 2 === 0 ? "success" : "processing"}
                          text={index % 2 === 0 ? "Active" : "Processing"}
                        />
                        <Tag
                          color={
                            index % 3 === 0
                              ? "blue"
                              : index % 3 === 1
                              ? "green"
                              : "orange"
                          }
                        >
                          {index % 3 === 0
                            ? "Senior"
                            : index % 3 === 1
                            ? "Junior"
                            : "Middle"}
                        </Tag>
                      </Space>
                    ),
                  },
                  columns[columns.length - 1],
                ]}
                dataSource={tableData}
                pagination={{ pageSize: 5 }}
              />
            </Card>

            {/* Phần List với pagination tùy chỉnh */}
            <Divider orientation="left">
              <Tooltip title="Ví dụ về List component với pagination có thể tùy chỉnh">
                Ví dụ List với Pagination
              </Tooltip>
            </Divider>

            {/* Controls cho pagination */}
            <Space
              direction="vertical"
              style={{ marginBottom: "20px" }}
              size="middle"
            >
              <Space>
                <Tooltip title="Chọn vị trí hiển thị pagination: trên, dưới, hoặc cả hai">
                  <span>Vị trí Pagination:</span>
                </Tooltip>
                <Radio.Group
                  optionType="button"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  {positionOptions.map((item) => (
                    <Tooltip
                      key={item}
                      title={`Hiển thị pagination ở ${
                        item === "top"
                          ? "trên"
                          : item === "bottom"
                          ? "dưới"
                          : "cả hai vị trí"
                      }`}
                    >
                      <Radio.Button value={item}>
                        {item === "top"
                          ? "Trên"
                          : item === "bottom"
                          ? "Dưới"
                          : "Cả hai"}
                      </Radio.Button>
                    </Tooltip>
                  ))}
                </Radio.Group>
              </Space>
              <Space>
                <Tooltip title="Chọn cách căn chỉnh pagination: trái, giữa, hoặc phải">
                  <span>Căn chỉnh Pagination:</span>
                </Tooltip>
                <Radio.Group
                  optionType="button"
                  value={align}
                  onChange={(e) => setAlign(e.target.value)}
                >
                  {alignOptions.map((item) => (
                    <Tooltip
                      key={item}
                      title={`Căn chỉnh pagination về ${
                        item === "start"
                          ? "trái"
                          : item === "center"
                          ? "giữa"
                          : "phải"
                      }`}
                    >
                      <Radio.Button value={item}>
                        {item === "start"
                          ? "Trái"
                          : item === "center"
                          ? "Giữa"
                          : "Phải"}
                      </Radio.Button>
                    </Tooltip>
                  ))}
                </Radio.Group>
              </Space>
            </Space>

            <List
              pagination={{
                position,
                pageSize: 3,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} của ${total} items`,
              }}
              dataSource={tableData}
              renderItem={(item, index) => (
                <List.Item
                  actions={[
                    <Button
                      key="detail"
                      type="primary"
                      size="small"
                      icon={<EyeOutlined />}
                      onClick={() => navigate(`/item/${item.key}`)}
                    >
                      Xem chi tiết
                    </Button>,
                    <Badge
                      key="badge"
                      count={index + 1}
                      style={{ backgroundColor: "#52c41a" }}
                    >
                      <Button type="link">#{index + 1}</Button>
                    </Badge>,
                    <Popover
                      key="popover"
                      content={
                        <div>
                          <p>
                            <strong>Họ tên:</strong> {item.name}
                          </p>
                          <p>
                            <strong>Tuổi:</strong> {item.age}
                          </p>
                          <p>
                            <strong>Địa chỉ:</strong> {item.address}
                          </p>
                          <p>
                            <strong>Email:</strong> {item.email}
                          </p>
                          <p>
                            <strong>Điện thoại:</strong> {item.phone}
                          </p>
                          <Space>
                            <Tag color="blue">Active</Tag>
                            <Tag color="green">Verified</Tag>
                          </Space>
                        </div>
                      }
                      title="Thông tin chi tiết"
                    >
                      <Button type="link">Quick View</Button>
                    </Popover>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Badge dot status="success">
                        <Avatar
                          src={
                            item.avatar ||
                            `https://api.dicebear.com/7.x/miniavs/svg?seed=${item.key}`
                          }
                          icon={<UserOutlined />}
                        />
                      </Badge>
                    }
                    title={
                      <Space>
                        <Button
                          type="link"
                          style={{ padding: 0, height: "auto" }}
                          onClick={() => navigate(`/item/${item.key}`)}
                        >
                          {item.name} ({item.age} tuổi)
                        </Button>
                        <Tag color={index % 2 === 0 ? "blue" : "green"}>
                          {index % 2 === 0 ? "Online" : "Offline"}
                        </Tag>
                      </Space>
                    }
                    description={
                      <div>
                        <Text>{item.address}</Text>
                        <br />
                        <Text type="secondary">
                          {item.email} • {item.phone}
                        </Text>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </TabPane>

          <TabPane
            tab={
              <span>
                <CalendarOutlined />
                Timeline & Tree
              </span>
            }
            key="2"
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card
                  title="Timeline Component"
                  extra={<ClockCircleOutlined />}
                >
                  <Timeline>
                    {timelineData.map((item, index) => (
                      <Timeline.Item key={index} color={item.color}>
                        {item.children}
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Tree Component" extra={<TeamOutlined />}>
                  <Tree
                    showIcon
                    defaultExpandedKeys={["0-0-0", "0-0-1"]}
                    defaultSelectedKeys={["0-0-0", "0-0-1"]}
                    defaultCheckedKeys={["0-0-0", "0-0-1"]}
                    onSelect={(keys) => console.log("Selected:", keys)}
                    treeData={treeData}
                    checkable
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane
            tab={
              <span>
                <EyeOutlined />
                Media & Visual
              </span>
            }
            key="3"
          >
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              {/* Carousel */}
              <Card title="Carousel Component">
                <Carousel autoplay>
                  <div
                    style={{
                      height: "200px",
                      background: "#364d79",
                      color: "white",
                      textAlign: "center",
                      lineHeight: "200px",
                    }}
                  >
                    <h3>Slide 1</h3>
                  </div>
                  <div
                    style={{
                      height: "200px",
                      background: "#52c41a",
                      color: "white",
                      textAlign: "center",
                      lineHeight: "200px",
                    }}
                  >
                    <h3>Slide 2</h3>
                  </div>
                  <div
                    style={{
                      height: "200px",
                      background: "#1890ff",
                      color: "white",
                      textAlign: "center",
                      lineHeight: "200px",
                    }}
                  >
                    <h3>Slide 3</h3>
                  </div>
                  <div
                    style={{
                      height: "200px",
                      background: "#f5222d",
                      color: "white",
                      textAlign: "center",
                      lineHeight: "200px",
                    }}
                  >
                    <h3>Slide 4</h3>
                  </div>
                </Carousel>
              </Card>

              {/* Image Gallery */}
              <Card title="Image Gallery">
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Image
                      width={200}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      placeholder={
                        <Image
                          preview={false}
                          src="https://zos.alipayobjects.com/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                          width={200}
                        />
                      }
                    />
                  </Col>
                  <Col span={8}>
                    <Image
                      width={200}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </Col>
                  <Col span={8}>
                    <Image
                      width={200}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </Col>
                </Row>
              </Card>

              {/* Placeholder for QR Code (not available in Antd v4) */}
              <Card title="QR Code Component">
                <Alert
                  message="QR Code component"
                  description="QR Code component không có sẵn trong Ant Design v4. Bạn có thể sử dụng thư viện bên thứ 3 như qrcode.js"
                  type="info"
                  showIcon
                />
              </Card>
            </Space>
          </TabPane>

          <TabPane
            tab={
              <span>
                <QuestionCircleOutlined />
                Advanced
              </span>
            }
            key="4"
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card title="Descriptions Component">
                  <Descriptions title="User Info" bordered>
                    <Descriptions.Item label="Product">
                      Cloud Database
                    </Descriptions.Item>
                    <Descriptions.Item label="Billing Mode">
                      Prepaid
                    </Descriptions.Item>
                    <Descriptions.Item label="Automatic Renewal">
                      YES
                    </Descriptions.Item>
                    <Descriptions.Item label="Order time">
                      2018-04-24 18:00:00
                    </Descriptions.Item>
                    <Descriptions.Item label="Usage Time" span={2}>
                      2019-04-24 18:00:00
                    </Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                      <Badge status="processing" text="Running" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Negotiated Amount">
                      $80.00
                    </Descriptions.Item>
                    <Descriptions.Item label="Discount">
                      $20.00
                    </Descriptions.Item>
                    <Descriptions.Item label="Official Receipts">
                      $60.00
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Segmented Control">
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    <Segmented
                      options={[
                        {
                          label: "List",
                          value: "List",
                          icon: <FileTextOutlined />,
                        },
                        {
                          label: "Kanban",
                          value: "Kanban",
                          icon: <TeamOutlined />,
                        },
                        {
                          label: "Calendar",
                          value: "Calendar",
                          icon: <CalendarOutlined />,
                        },
                      ]}
                    />
                    <Segmented
                      options={[
                        "Daily",
                        "Weekly",
                        "Monthly",
                        "Quarterly",
                        "Yearly",
                      ]}
                    />
                  </Space>
                </Card>
              </Col>
            </Row>

            {/* Collapse */}
            <Card title="Collapse Component" style={{ marginTop: 16 }}>
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
              >
                <Panel header="Thông tin cơ bản" key="1">
                  <Paragraph>
                    Ant Design React là một thư viện UI components cho React. Nó
                    cung cấp nhiều component chất lượng cao và có thể tùy chỉnh
                    để xây dựng giao diện người dùng hiện đại.
                  </Paragraph>
                </Panel>
                <Panel header="Tính năng nâng cao" key="2">
                  <Paragraph>
                    Bao gồm các component như Table, Form, DatePicker, và nhiều
                    component khác với thiết kế nhất quán và hiệu suất cao.
                  </Paragraph>
                </Panel>
                <Panel header="Hỗ trợ & Cộng đồng" key="3">
                  <Paragraph>
                    Có cộng đồng lớn, tài liệu phong phú và được bảo trì tích
                    cực bởi đội ngũ Ant Design.
                  </Paragraph>
                </Panel>
              </Collapse>
            </Card>

            {/* Anchor */}
            <Card title="Anchor Component" style={{ marginTop: 16 }}>
              <Affix offsetTop={100}>
                <Anchor>
                  <Anchor.Link href="#part-1" title="Part 1" />
                  <Anchor.Link href="#part-2" title="Part 2" />
                  <Anchor.Link href="#part-3" title="Part 3" />
                </Anchor>
              </Affix>
            </Card>

            {/* Empty State */}
            <Card title="Empty State" style={{ marginTop: 16 }}>
              <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{ height: 60 }}
                description={
                  <span>
                    Tùy chỉnh <a href="#API">mô tả</a>
                  </span>
                }
              >
                <Button type="primary">Tạo ngay</Button>
              </Empty>
            </Card>
          </TabPane>
        </Tabs>

        {/* Phần thẻ cũ */}
        <Divider orientation="left">
          <Tooltip title="Ví dụ về cách sử dụng Card component">
            Ví dụ Card với Actions
          </Tooltip>
        </Divider>

        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card
              title="Card với Avatar"
              extra={
                <Badge dot>
                  <a href="#!">More</a>
                </Badge>
              }
              actions={[
                <LikeOutlined key="like" />,
                <StarOutlined key="star" />,
                <ShareAltOutlined key="share" />,
              ]}
            >
              <Card.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <Image
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
              actions={[
                <HeartOutlined key="heart" />,
                <EyeOutlined key="view" />,
                <ShareAltOutlined key="share" />,
              ]}
            >
              <Card.Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Card with loading"
              loading={false}
              actions={[
                <CheckCircleOutlined
                  key="check"
                  style={{ color: "#52c41a" }}
                />,
                <ExclamationCircleOutlined
                  key="warning"
                  style={{ color: "#faad14" }}
                />,
                <CloseCircleOutlined
                  key="error"
                  style={{ color: "#f5222d" }}
                />,
              ]}
            >
              <Text>Card content</Text>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default DataDisplayDemo;
