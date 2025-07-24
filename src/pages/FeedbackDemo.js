import React from "react";
import {
  Modal,
  Button,
  message,
  notification,
  Alert,
  Result,
  Progress,
  Spin,
  Typography,
  Space,
  Card,
  Divider,
} from "antd";
import {
  SmileOutlined,
  LoadingOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const FeedbackDemo = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  // Hiển thị thông báo dạng message
  const showMessage = () => {
    message.success("Đây là thông báo thành công");
  };

  // Hiển thị thông báo dạng notification
  const showNotification = () => {
    notification.open({
      message: "Tiêu đề Thông báo",
      description: "Đây là nội dung của thông báo.",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {/* Tiêu đề chính */}
      <Title level={2}>Thành phần Phản hồi</Title>

      {/* Phần Message & Notification */}
      <Divider orientation="left">Thông báo & Tin nhắn</Divider>
      <Card>
        <Space>
          <Button type="primary" onClick={showMessage}>
            Hiển thị Thông báo
          </Button>
          <Button onClick={showNotification}>Hiển thị Notification</Button>
        </Space>
      </Card>

      {/* Phần Modal */}
      <Divider orientation="left">Hộp thoại Modal</Divider>
      <Card>
        <Button type="primary" onClick={() => setModalVisible(true)}>
          Mở Modal
        </Button>
        <Modal
          title="Hộp thoại cơ bản"
          open={modalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
        >
          <p>Nội dung dòng 1</p>
          <p>Nội dung dòng 2</p>
          <p>Nội dung dòng 3</p>
        </Modal>
      </Card>

      {/* Phần Alert */}
      <Divider orientation="left">Cảnh báo</Divider>
      <Card>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Alert message="Thành công" type="success" />
          <Alert message="Thông tin" type="info" />
          <Alert message="Cảnh báo" type="warning" />
          <Alert message="Lỗi" type="error" />
        </Space>
      </Card>

      {/* Phần Progress & Spin */}
      <Divider orientation="left">Tiến độ & Đang tải</Divider>
      <Card>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <br />
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        </Space>
      </Card>

      {/* Phần Result */}
      <Divider orientation="left">Kết quả</Divider>
      <Card>
        <Result
          icon={<SmileOutlined />}
          title="Tuyệt vời, bạn đã hoàn tất tất cả thao tác!"
          extra={<Button type="primary">Tiếp tục</Button>}
        />
      </Card>
    </Space>
  );
};

export default FeedbackDemo;
