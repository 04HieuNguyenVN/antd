// Import các thư viện và components cần thiết
import React, { useState } from "react";
// Import các components từ thư viện Ant Design
import {
  Layout,
  Menu,
  Button,
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  Table,
  Modal,
  notification,
  Tag,
  Avatar,
  Progress,
  Steps,
  Tabs,
  Carousel,
  Rate,
  Switch,
  Slider,
  Upload,
  message,
} from "antd";
import {
  UserOutlined,
  UploadOutlined,
  SettingOutlined,
  AppstoreOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addUser } from "./store/counterSlice";
import "antd/dist/reset.css";

const { Header, Sider, Content } = Layout;
const { Option } = Select;
const { Step } = Steps;
const { TabPane } = Tabs;

function App() {
  // Các state cho giao diện
  const [collapsed, setCollapsed] = useState(false); // Trạng thái đóng/mở sidebar
  const [isModalVisible, setIsModalVisible] = useState(false); // Trạng thái hiển thị modal
  const [form] = Form.useForm(); // Khởi tạo form

  // Quản lý state với Redux
  const count = useSelector((state) => state.counter.value); // Lấy giá trị đếm từ Redux
  const users = useSelector((state) => state.counter.users); // Lấy danh sách người dùng từ Redux
  const dispatch = useDispatch(); // Khởi tạo dispatch để gửi actions

  // Cấu hình cột cho bảng dữ liệu
  const columns = [
    {
      title: "Họ Tên", // Tiêu đề cột
      dataIndex: "name", // Trường dữ liệu tương ứng trong data source
      key: "name", // Khóa duy nhất cho cột
      render: (text) => (
        <button
          type="button"
          style={{
            background: "none",
            border: "none",
            color: "#1890ff",
            cursor: "pointer",
            padding: 0,
          }}
          onClick={(e) => e.preventDefault()}
        >
          {text}{" "}
        </button>
      ),
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Địa Chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {" "}
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {" "}
                {tag.toUpperCase()}{" "}
              </Tag>
            );
          })}{" "}
        </>
      ),
    },
  ];

  // Dữ liệu mẫu cho bảng
  const tableData = [
    {
      key: "1", // Khóa duy nhất cho mỗi dòng
      name: "Nguyễn Văn A",
      age: 32,
      address: "Hà Nội",
      tags: ["giỏi", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  // Xử lý hiển thị modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Xử lý khi người dùng nhấn nút Đồng Ý trong modal
  const handleOk = () => {
    setIsModalVisible(false);
    notification.success({
      message: "Thành công",
      description: "Thao tác với modal đã hoàn tất!",
    });
  };

  // Xử lý khi người dùng đóng modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Xử lý khi form được submit
  const onFormFinish = (values) => {
    dispatch(addUser(values)); // Thêm người dùng vào Redux store
    message.success("Thêm người dùng thành công!");
    form.resetFields(); // Reset form về trạng thái ban đầu
  };

  // Cấu hình cho component Upload
  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", // API endpoint để upload file
    headers: {
      authorization: "authorization-text", // Header xác thực
    },
    onChange(info) {
      // Xử lý khi trạng thái upload thay đổi
      if (info.file.status === "done") {
        message.success(`Tải lên file ${info.file.name} thành công`);
      } else if (info.file.status === "error") {
        message.error(`Tải lên file ${info.file.name} thất bại`);
      }
    },
  };

  // Render giao diện ứng dụng
  return (
    // Layout chính bao bọc toàn bộ ứng dụng
    <Layout style={{ minHeight: "100vh" }}>
      {" "}
      {/* Thanh sidebar có thể đóng/mở */}{" "}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.3)",
          }}
        />{" "}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            Các Thành Phần{" "}
          </Menu.Item>{" "}
          <Menu.Item key="2" icon={<DatabaseOutlined />}>
            Hiển Thị Dữ Liệu{" "}
          </Menu.Item>{" "}
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Cài Đặt{" "}
          </Menu.Item>{" "}
        </Menu>{" "}
      </Sider>{" "}
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }}>
          <Button
            type="text"
            icon={collapsed ? <UserOutlined /> : <UserOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />{" "}
          <span style={{ fontSize: "18px", marginLeft: 16 }}>
            Demo Ant Design + Redux{" "}
          </span>{" "}
        </Header>{" "}
        <Content
          style={{ margin: "24px 16px", padding: 24, background: "#fff" }}
        >
          <div style={{ marginBottom: 24 }}>
            <h2> Ví Dụ Về Bộ Đếm Redux </h2>{" "}
            <div style={{ marginBottom: 16 }}>
              <Button
                onClick={() => dispatch(increment())}
                type="primary"
                style={{ marginRight: 8 }}
              >
                Tăng{" "}
              </Button>{" "}
              <Button
                onClick={() => dispatch(decrement())}
                style={{ marginRight: 8 }}
              >
                Giảm{" "}
              </Button>{" "}
              <Tag color="blue" style={{ fontSize: 16 }}>
                Count: {count}{" "}
              </Tag>{" "}
            </div>{" "}
          </div>{" "}
          <Tabs defaultActiveKey="1">
            <TabPane tab="Form Nhập Liệu" key="1">
              <Card title="Ví Dụ Form" style={{ marginBottom: 24 }}>
                <Form form={form} layout="vertical" onFinish={onFormFinish}>
                  <Form.Item
                    label="Họ Tên"
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập họ tên!" },
                    ]}
                  >
                    <Input placeholder="Nhập họ tên của bạn" />
                  </Form.Item>{" "}
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Email không hợp lệ!",
                      },
                    ]}
                  >
                    <Input placeholder="Nhập email của bạn" />
                  </Form.Item>{" "}
                  <Form.Item label="Độ Tuổi" name="age">
                    <Select placeholder="Chọn độ tuổi">
                      <Option value="18-25"> 18 - 25 </Option>{" "}
                      <Option value="26-35"> 26 - 35 </Option>{" "}
                      <Option value="36-45"> 36 - 45 </Option>{" "}
                    </Select>{" "}
                  </Form.Item>{" "}
                  <Form.Item label="Ngày Sinh" name="birthDate">
                    <DatePicker
                      style={{ width: "100%" }}
                      placeholder="Chọn ngày sinh"
                    />
                  </Form.Item>{" "}
                  <Form.Item label="Đánh Giá" name="rating">
                    <Rate />
                  </Form.Item>{" "}
                  <Form.Item
                    label="Trạng Thái"
                    name="active"
                    valuePropName="checked"
                  >
                    <Switch checkedChildren="Bật" unCheckedChildren="Tắt" />
                  </Form.Item>{" "}
                  <Form.Item label="Slider" name="slider">
                    <Slider range defaultValue={[20, 50]} />{" "}
                  </Form.Item>{" "}
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Add User{" "}
                    </Button>{" "}
                  </Form.Item>{" "}
                </Form>{" "}
              </Card>{" "}
            </TabPane>{" "}
            <TabPane tab="Hiển Thị Dữ Liệu" key="2">
              <Card title="Bảng Người Dùng" style={{ marginBottom: 24 }}>
                <Table columns={columns} dataSource={tableData} />{" "}
              </Card>{" "}
              <Card title="Tiến Trình & Các Bước" style={{ marginBottom: 24 }}>
                <Progress percent={30} />{" "}
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />{" "}
                <Progress type="circle" percent={75} />{" "}
                <div style={{ marginTop: 24 }}>
                  <Steps current={1}>
                    <Step
                      title="Finished"
                      description="This is a description."
                    />
                    <Step
                      title="In Progress"
                      description="This is a description."
                    />
                    <Step
                      title="Waiting"
                      description="This is a description."
                    />
                  </Steps>{" "}
                </div>{" "}
              </Card>{" "}
              <Card title="Redux Users" style={{ marginBottom: 24 }}>
                {" "}
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <Card key={index} size="small" style={{ marginBottom: 8 }}>
                      <Avatar
                        icon={<UserOutlined />}
                        style={{ marginRight: 8 }}
                      />{" "}
                      {user.name} - {user.email}{" "}
                    </Card>
                  ))
                ) : (
                  <p> No users added yet.Use the form above to add users. </p>
                )}{" "}
              </Card>{" "}
            </TabPane>{" "}
            <TabPane tab="Tương Tác" key="3">
              <Card title="Nút & Cửa Sổ Modal" style={{ marginBottom: 24 }}>
                <Button
                  type="primary"
                  onClick={showModal}
                  style={{ marginRight: 8 }}
                >
                  Mở Modal{" "}
                </Button>{" "}
                <Button
                  type="dashed"
                  onClick={() =>
                    notification.info({
                      message: "Thông Tin",
                      description: "Đây là một thông báo thông tin!",
                    })
                  }
                >
                  Hiện Thông Báo{" "}
                </Button>{" "}
                <Modal
                  title="Demo Modal"
                  open={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  okText="Đồng Ý"
                  cancelText="Hủy"
                >
                  <p> Đây là modal demo với giao diện Ant Design. </p>{" "}
                  <p>
                    {" "}
                    Bạn có thể tương tác với các thành phần khác nhau ở đây.{" "}
                  </p>{" "}
                </Modal>{" "}
              </Card>{" "}
              <Card title="Upload & Carousel" style={{ marginBottom: 24 }}>
                <Upload {...uploadProps}>
                  <Button icon={<UploadOutlined />}> Click to Upload </Button>{" "}
                </Upload>{" "}
                <div style={{ marginTop: 24 }}>
                  <Carousel autoplay>
                    <div>
                      <h3
                        style={{
                          height: 160,
                          color: "#fff",
                          lineHeight: "160px",
                          textAlign: "center",
                          background: "#364d79",
                        }}
                      >
                        1{" "}
                      </h3>{" "}
                    </div>{" "}
                    <div>
                      <h3
                        style={{
                          height: 160,
                          color: "#fff",
                          lineHeight: "160px",
                          textAlign: "center",
                          background: "#364d79",
                        }}
                      >
                        2{" "}
                      </h3>{" "}
                    </div>{" "}
                    <div>
                      <h3
                        style={{
                          height: 160,
                          color: "#fff",
                          lineHeight: "160px",
                          textAlign: "center",
                          background: "#364d79",
                        }}
                      >
                        3{" "}
                      </h3>{" "}
                    </div>{" "}
                    <div>
                      <h3
                        style={{
                          height: 160,
                          color: "#fff",
                          lineHeight: "160px",
                          textAlign: "center",
                          background: "#364d79",
                        }}
                      >
                        4{" "}
                      </h3>{" "}
                    </div>{" "}
                  </Carousel>{" "}
                </div>{" "}
              </Card>{" "}
            </TabPane>{" "}
          </Tabs>{" "}
        </Content>{" "}
      </Layout>{" "}
    </Layout>
  );
}

export default App;
