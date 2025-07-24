import React from "react";
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
} from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const Dashboard = () => {
  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {/* Thông báo chào mừng */}
        <Alert
          message="Chào mừng đến với bản demo các thành phần Ant Design"
          description="Đây là trang tổng quan hiển thị các ví dụ về thành phần UI từ thư viện Ant Design. Sử dụng menu bên trái để điều hướng đến các thành phần khác."
          type="info"
          showIcon
        />

        {/* Tiêu đề trang */}
        <Title level={2}>Tổng quan</Title>

        {/* Hàng hiển thị số liệu thống kê */}
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
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <Statistic title="Tổng số" value={2023} />
            </Card>
          </Col>
        </Row>

        <Divider />

        {/* Hàng hiển thị các thẻ thông tin */}
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Hành động"
              extra={<Button type="link">Xem thêm</Button>}
            >
              <p>Nội dung thẻ</p>
              <p>Nội dung thẻ</p>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Thông báo"
              extra={<Button type="link">Xem thêm</Button>}
            >
              <p>Nội dung thẻ</p>
              <p>Nội dung thẻ</p>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Thống kê"
              extra={<Button type="link">Xem thêm</Button>}
            >
              <p>Nội dung thẻ</p>
              <p>Nội dung thẻ</p>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default Dashboard;
