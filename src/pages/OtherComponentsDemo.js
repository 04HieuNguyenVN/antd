import React from "react";
import {
  Button,
  Card,
  Divider,
  Space,
  Typography,
  FloatButton,
  ColorPicker,
} from "antd";
import { PlusOutlined, CustomerServiceOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text, Link } = Typography;

const OtherComponentsDemo = () => {
  return (
    // Hiển thị các thành phần trong bố cục dọc, có khoảng cách giữa các khối
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Title level={2}>Các Thành Phần Khác</Title>

      {/* Vùng hiển thị các loại nút */}
      <Divider orientation="left">Nút (Button)</Divider>
      <Card>
        <Space wrap>
          <Button type="primary">Nút Chính</Button>
          <Button>Mặc Định</Button>
          <Button type="dashed">Nút Gạch Nét</Button>
          <Button type="text">Nút Văn Bản</Button>
          <Button type="link">Nút Liên Kết</Button>
        </Space>
      </Card>

      {/* Vùng hiển thị các kiểu chữ */}
      <Divider orientation="left">Kiểu Chữ (Typography)</Divider>
      <Card>
        <Typography>
          <Title>Giới Thiệu</Title>
          <Paragraph>
            Trong quá trình phát triển các ứng dụng nội bộ trên desktop, có rất
            nhiều quy chuẩn thiết kế và cách triển khai khác nhau, điều này có
            thể gây khó khăn cho cả nhà thiết kế và lập trình viên, làm giảm
            hiệu suất phát triển.
          </Paragraph>
          <Text>Ant Design (mặc định)</Text>
          <br />
          <Text type="secondary">Ant Design (phụ)</Text>
          <br />
          <Text type="success">Ant Design (thành công)</Text>
          <br />
          <Text type="warning">Ant Design (cảnh báo)</Text>
          <br />
          <Text type="danger">Ant Design (nguy hiểm)</Text>
          <br />
          <Text disabled>Ant Design (vô hiệu hóa)</Text>
          <br />
          <Text mark>Ant Design (đánh dấu)</Text>
          <br />
          <Text code>Ant Design (mã code)</Text>
          <br />
          <Text keyboard>Ant Design (phím tắt)</Text>
          <br />
          <Text underline>Ant Design (gạch chân)</Text>
          <br />
          <Text delete>Ant Design (gạch bỏ)</Text>
          <br />
          <Text strong>Ant Design (đậm)</Text>
          <br />
          <Text italic>Ant Design (nghiêng)</Text>
          <br />
          <Link href="https://ant.design" target="_blank">
            Ant Design (Liên kết)
          </Link>
        </Typography>
      </Card>

      {/* Vùng hiển thị nút nổi (FloatButton) */}
      <Divider orientation="left">Nút Nổi (FloatButton)</Divider>
      <Card>
        {/* Nhóm nút nổi tròn */}
        <FloatButton.Group shape="circle" style={{ right: 94 }}>
          <FloatButton icon={<PlusOutlined />} />
          {/* Nút quay lại đầu trang, luôn hiển thị */}
          <FloatButton.BackTop visibilityHeight={0} />
        </FloatButton.Group>

        {/* Nút hỗ trợ khách hàng */}
        <FloatButton icon={<CustomerServiceOutlined />} style={{ right: 24 }} />
      </Card>
      <Divider orientation="left">ColorPicker</Divider>
      <Space direction="vertical">
        <ColorPicker defaultValue="#1677ff" size="small" />
        <ColorPicker defaultValue="#1677ff" />
        <ColorPicker defaultValue="#1677ff" size="large" />
      </Space>
      <Space direction="vertical">
        <ColorPicker defaultValue="#1677ff" size="small" showText />
        <ColorPicker defaultValue="#1677ff" showText />
        <ColorPicker defaultValue="#1677ff" size="large" showText />
      </Space>
    </Space>
  );
};

export default OtherComponentsDemo;
