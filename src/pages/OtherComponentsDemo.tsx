import React from "react";
import { Button, Card, Divider, Space, Typography } from "antd";

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

      {/* Thông báo về components không có sẵn */}
      <Divider orientation="left">
        Components không có trong Ant Design v4
      </Divider>
      <Card>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Text strong>FloatButton:</Text>
          <Text>
            FloatButton component không có sẵn trong Ant Design v4. Bạn có thể
            sử dụng Affix + Button để tạo hiệu ứng tương tự.
          </Text>

          <Text strong>ColorPicker:</Text>
          <Text>
            ColorPicker component không có sẵn trong Ant Design v4. Bạn có thể
            sử dụng thư viện bên thứ 3 như react-color.
          </Text>
        </Space>
      </Card>
    </Space>
  );
};

export default OtherComponentsDemo;
