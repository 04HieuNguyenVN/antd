import React from "react";
import { Layout, Card, Divider, Row, Col, Space, Typography } from "antd";

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

const style = {
  background: "#0092ff",
  padding: "8px 0",
  color: "white",
  textAlign: "center",
};

const LayoutComponentsDemo = () => {
  return (
    <Layout>
      {/* Header của layout */}
      <Header style={{ color: "white", textAlign: "center", fontSize: "24px" }}>
        Bản trình diễn bố cục Ant Design
      </Header>

      {/* Nội dung chính */}
      <Content style={{ padding: "24px 50px" }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={2}>Các thành phần bố cục</Title>

          {/* Hệ thống lưới cơ bản */}
          <Divider orientation="left">Hệ thống lưới (Row và Col)</Divider>
          <Card>
            <Text>Hệ thống lưới gồm 24 cột.</Text>
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
