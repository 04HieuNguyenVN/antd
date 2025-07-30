import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Statistic,
  Button,
  Typography,
  Space,
  Divider,
  Alert,
  Progress,
  Timeline,
  Badge,
  Avatar,
  List,
  Tag,
  Rate,
  Carousel,
  Table,
  Tabs,
  Steps,
  Descriptions,
  Result,
  Empty,
  Spin,
  BackTop,
  Affix,
} from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  InfoCircleOutlined,
  ClockCircleOutlined,
  UserOutlined,
  ShoppingOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  ExclamationCircleOutlined,
  TrophyOutlined,
  DollarOutlined,
  TeamOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import "../styles/pages/Dashboard.css";

const { Title, Text, Paragraph } = Typography;

interface ActivityData {
  title: string;
  description: string;
  avatar: React.ReactNode;
}

interface TableData {
  key: string;
  name: string;
  sales: number;
  status: string;
  date: string;
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("1");

  // Dữ liệu mẫu cho các component
  const activityData: ActivityData[] = [
    {
      title: "Người dùng mới đăng ký",
      description: "5 phút trước",
      avatar: <Avatar icon={<UserOutlined />} />,
    },
    {
      title: "Đơn hàng mới",
      description: "10 phút trước",
      avatar: (
        <Avatar
          icon={<ShoppingOutlined />}
          style={{ backgroundColor: "#87d068" }}
        />
      ),
    },
    {
      title: "Phản hồi từ khách hàng",
      description: "15 phút trước",
      avatar: (
        <Avatar
          icon={<MessageOutlined />}
          style={{ backgroundColor: "#108ee9" }}
        />
      ),
    },
  ];

  const tableData = [
    {
      key: "1",
      name: "Nguyễn Văn A",
      age: 32,
      address: "Hà Nội",
      status: "active",
    },
    {
      key: "2",
      name: "Trần Thị B",
      age: 28,
      address: "TP.HCM",
      status: "inactive",
    },
    {
      key: "3",
      name: "Lê Văn C",
      age: 35,
      address: "Đà Nẵng",
      status: "active",
    },
  ];

  const tableColumns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>
          {status === "active" ? "Hoạt động" : "Không hoạt động"}
        </Tag>
      ),
    },
  ];
  return (
    <div className="dashboard">
      <BackTop />
      <Space direction="vertical" size="large" className="dashboard__space">
        {/* Thông báo chào mừng */}
        <Alert
          message="Chào mừng đến với bản demo các thành phần Ant Design"
          description="Đây là trang tổng quan hiển thị các ví dụ về thành phần UI từ thư viện Ant Design. Sử dụng menu bên trái để điều hướng đến các thành phần khác."
          type="info"
          showIcon
          action={
            <Button size="small" type="text">
              Đóng
            </Button>
          }
        />

        {/* Tiêu đề trang với Badge */}
        <div className="dashboard__header">
          <Title level={2}>Tổng quan</Title>
          <Badge count={5} offset={[10, 0]}>
            <Avatar shape="square" icon={<UserOutlined />} />
          </Badge>
        </div>

        {/* Hàng hiển thị số liệu thống kê với Progress */}
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="Hoạt động"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <Progress percent={75} strokeColor="#52c41a" size="small" />
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <Statistic
                title="Không hoạt động"
                value={9.3}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
              <Progress percent={25} strokeColor="#ff4d4f" size="small" />
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <Statistic
                title="Phản hồi"
                value={93}
                prefix={<InfoCircleOutlined />}
                suffix="/ 100"
              />
              <Rate disabled defaultValue={4.5} style={{ fontSize: 14 }} />
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <Statistic
                title="Tổng số"
                value={2023}
                prefix={<TrophyOutlined />}
              />
              <Tag color="blue">Năm hiện tại</Tag>
            </Card>
          </Col>
        </Row>

        {/* Steps Component */}
        <Card title="Quy trình hoạt động">
          <Steps
            current={1}
            items={[
              {
                title: "Bắt đầu",
                status: "finish",
                icon: <UserOutlined />,
              },
              {
                title: "Đang xử lý",
                status: "process",
                icon: <SyncOutlined spin />,
              },
              {
                title: "Hoàn thành",
                status: "wait",
                icon: <CheckCircleOutlined />,
              },
            ]}
          />
        </Card>

        {/* Tabs với nội dung khác nhau */}
        <Card>
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            items={[
              {
                key: "1",
                label: "Hoạt động gần đây",
                children: (
                  <List
                    itemLayout="horizontal"
                    dataSource={activityData}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={item.avatar}
                          title={item.title}
                          description={item.description}
                        />
                        <Tag color="green">Mới</Tag>
                      </List.Item>
                    )}
                  />
                ),
              },
              {
                key: "2",
                label: "Bảng dữ liệu",
                children: (
                  <Table
                    dataSource={tableData}
                    columns={tableColumns}
                    pagination={false}
                    size="small"
                  />
                ),
              },
              {
                key: "3",
                label: "Timeline",
                children: (
                  <Timeline>
                    <Timeline.Item
                      dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                      color="green"
                    >
                      Tạo dịch vụ (9:00 AM)
                    </Timeline.Item>
                    <Timeline.Item
                      dot={<SyncOutlined style={{ fontSize: "16px" }} />}
                      color="blue"
                    >
                      Đang xử lý (10:00 AM)
                    </Timeline.Item>
                    <Timeline.Item
                      dot={
                        <ExclamationCircleOutlined
                          style={{ fontSize: "16px" }}
                        />
                      }
                      color="red"
                    >
                      Cần xem xét (11:00 AM)
                    </Timeline.Item>
                  </Timeline>
                ),
              },
            ]}
          />
        </Card>

        <Divider>Thống kê chi tiết</Divider>

        {/* Carousel với các card thông tin */}
        <Card title="Tin tức và cập nhật">
          <Carousel autoplay>
            <div>
              <Card
                style={{
                  margin: "0 8px",
                  textAlign: "center",
                  backgroundColor: "#f0f9ff",
                }}
                bodyStyle={{ padding: "40px 24px" }}
              >
                <DollarOutlined
                  style={{ fontSize: "48px", color: "#1890ff" }}
                />
                <Title level={3}>Doanh thu tăng 25%</Title>
                <Paragraph>So với tháng trước</Paragraph>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  margin: "0 8px",
                  textAlign: "center",
                  backgroundColor: "#f6ffed",
                }}
                bodyStyle={{ padding: "40px 24px" }}
              >
                <TeamOutlined style={{ fontSize: "48px", color: "#52c41a" }} />
                <Title level={3}>500+ Người dùng mới</Title>
                <Paragraph>Trong tuần này</Paragraph>
              </Card>
            </div>
            <div>
              <Card
                style={{
                  margin: "0 8px",
                  textAlign: "center",
                  backgroundColor: "#fff7e6",
                }}
                bodyStyle={{ padding: "40px 24px" }}
              >
                <RiseOutlined style={{ fontSize: "48px", color: "#fa8c16" }} />
                <Title level={3}>Hiệu suất cao</Title>
                <Paragraph>Hệ thống hoạt động ổn định</Paragraph>
              </Card>
            </div>
          </Carousel>
        </Card>

        {/* Descriptions Component */}
        <Card title="Thông tin hệ thống">
          <Descriptions bordered column={2}>
            <Descriptions.Item label="Phiên bản">2.0.1</Descriptions.Item>
            <Descriptions.Item label="Trạng thái">
              <Badge status="processing" text="Đang chạy" />
            </Descriptions.Item>
            <Descriptions.Item label="Uptime">24 ngày</Descriptions.Item>
            <Descriptions.Item label="Người dùng online">
              <Badge count={1250} showZero color="#52c41a" />
            </Descriptions.Item>
            <Descriptions.Item label="Bộ nhớ sử dụng">
              <Progress percent={65} size="small" style={{ width: "100px" }} />
            </Descriptions.Item>
            <Descriptions.Item label="CPU">
              <Progress percent={45} size="small" style={{ width: "100px" }} />
            </Descriptions.Item>
          </Descriptions>
        </Card>

        {/* Hàng hiển thị các thẻ thông tin */}
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Hành động"
              extra={<Button type="link">Xem thêm</Button>}
              actions={[
                <LikeOutlined key="like" />,
                <MessageOutlined key="message" />,
                <StarOutlined key="star" />,
              ]}
            >
              <Spin spinning={false}>
                <List
                  size="small"
                  dataSource={[
                    "Tạo báo cáo",
                    "Gửi thông báo",
                    "Cập nhật dữ liệu",
                  ]}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Spin>
            </Card>
          </Col>

          <Col span={8}>
            <Card title="Thông báo" extra={<Badge count={3} />}>
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Không có thông báo mới"
              />
            </Card>
          </Col>

          <Col span={8}>
            <Card title="Kết quả" extra={<Button type="link">Xem thêm</Button>}>
              <Result
                status="success"
                title="Hoàn thành!"
                subTitle="Tất cả tác vụ đã được xử lý thành công."
                extra={[
                  <Button type="primary" key="console" size="small">
                    Chi tiết
                  </Button>,
                ]}
              />
            </Card>
          </Col>
        </Row>

        {/* Affix Component */}
        <Affix offsetBottom={20}>
          <Card size="small" style={{ width: "200px", marginLeft: "auto" }}>
            <Text strong>Thời gian thực: </Text>
            <br />
            <Text code>{new Date().toLocaleTimeString()}</Text>
          </Card>
        </Affix>
      </Space>
    </div>
  );
};

export default Dashboard;
