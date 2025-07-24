import React from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  DatePicker,
  Select,
  InputNumber,
  Switch,
  Upload,
  Radio,
  Card,
  Divider,
  Row,
  Col,
  Space,
  Typography,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

const FormDemo = () => {
  // Hàm xử lý khi form gửi thành công
  const onFinish = (values) => {
    console.log("Thành công:", values);
    message.success(
      "Gửi biểu mẫu thành công! Kiểm tra console để xem giá trị."
    );
  };

  // Hàm xử lý khi form gửi thất bại
  const onFinishFailed = (errorInfo) => {
    console.log("Thất bại:", errorInfo);
    message.error("Gửi biểu mẫu thất bại.");
  };

  // Xử lý dữ liệu upload file
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {/* Tiêu đề chính */}
      <Title level={2}>Trình diễn các thành phần Form</Title>

      {/* Form cơ bản với kiểm tra hợp lệ */}
      <Card title="Biểu mẫu cơ bản có kiểm tra dữ liệu">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true, username: "Ant Design" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên đăng nhập!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Các thành phần form nâng cao */}
      <Card title="Thành phần biểu mẫu nâng cao">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Chọn quốc gia">
            <Select placeholder="Chọn quốc gia">
              <Option value="china">Trung Quốc</Option>
              <Option value="usa">Hoa Kỳ</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Chọn ngày">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Nhập số (1 - 10)">
            <InputNumber min={1} max={10} defaultValue={3} />
          </Form.Item>

          <Form.Item label="Lựa chọn">
            <Radio.Group>
              <Radio value="a">Mục 1</Radio>
              <Radio value="b">Mục 2</Radio>
              <Radio value="c">Mục 3</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Bật/Tắt" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item
            label="Tải lên tệp"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Nhấn để tải lên</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};

export default FormDemo;
