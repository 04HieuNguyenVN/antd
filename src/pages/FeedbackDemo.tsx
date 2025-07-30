import React, { useState } from "react";
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
  Drawer,
  Popconfirm,
  Popover,
  Tooltip,
  Skeleton,
  Empty,
  BackTop,
  Affix,
  Row,
  Col,
  Steps,
  Timeline,
  Collapse,
  Tabs,
  Badge,
  Tag,
  Rate,
  Descriptions,
} from "antd";
import {
  SmileOutlined,
  LoadingOutlined,
  QuestionCircleOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  WarningOutlined,
  BellOutlined,
  HeartOutlined,
  StarOutlined,
  LikeOutlined,
  ShareAltOutlined,
  FileTextOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Step } = Steps;

const FeedbackDemo: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("1");
  const [loading, setLoading] = useState<boolean>(false);
  const [skeletonLoading, setSkeletonLoading] = useState<boolean>(true);

  // Hiển thị thông báo dạng message
  const showMessage = () => {
    message.success("Đây là thông báo thành công");
  };

  const showMessageTypes = () => {
    message.info("Thông tin");
    setTimeout(() => message.warning("Cảnh báo"), 1000);
    setTimeout(() => message.error("Lỗi"), 2000);
    setTimeout(() => message.loading("Đang tải..."), 3000);
  };

  // Hiển thị thông báo dạng notification
  const showNotification = () => {
    notification.open({
      message: "Tiêu đề Thông báo",
      description: "Đây là nội dung của thông báo.",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  const showNotificationTypes = () => {
    notification.success({
      message: "Thành công",
      description: "Thao tác đã được thực hiện thành công",
      icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
    });

    setTimeout(() => {
      notification.error({
        message: "Lỗi",
        description: "Đã xảy ra lỗi trong quá trình xử lý",
        icon: <CloseCircleOutlined style={{ color: "#f5222d" }} />,
      });
    }, 1000);
  };

  const showProgress = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  const toggleSkeleton = () => {
    setSkeletonLoading(!skeletonLoading);
  };

  return (
    <div>
      <BackTop />

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {/* Tiêu đề chính */}
        <Alert
          message="Feedback Components"
          description="Showcase các component phản hồi và tương tác người dùng"
          type="info"
          showIcon
          closable
        />

        <Title level={2}>
          <BellOutlined style={{ marginRight: 8 }} />
          Thành phần Phản hồi
        </Title>

        {/* Tabs chứa các nhóm component */}
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane
            tab={
              <span>
                <BellOutlined />
                Thông báo & Tin nhắn
              </span>
            }
            key="1"
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card
                  title="Message Component"
                  extra={
                    <Badge count={5}>
                      <BellOutlined />
                    </Badge>
                  }
                >
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Button type="primary" onClick={showMessage}>
                      Thông báo cơ bản
                    </Button>
                    <Button onClick={showMessageTypes}>
                      Các loại thông báo
                    </Button>
                    <Divider />
                    <Text>Message sẽ hiển thị ở góc trên màn hình</Text>
                  </Space>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title="Notification Component"
                  extra={<Tag color="blue">Persistent</Tag>}
                >
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Button onClick={showNotification}>
                      Notification cơ bản
                    </Button>
                    <Button type="dashed" onClick={showNotificationTypes}>
                      Notification với icon
                    </Button>
                    <Divider />
                    <Text>Notification có thể chứa nhiều thông tin hơn</Text>
                  </Space>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane
            tab={
              <span>
                <InfoCircleOutlined />
                Modal & Drawer
              </span>
            }
            key="2"
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card title="Modal Component">
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Button
                      type="primary"
                      onClick={() => setModalVisible(true)}
                    >
                      Mở Modal cơ bản
                    </Button>
                    <Button
                      onClick={() => {
                        Modal.confirm({
                          title: "Xác nhận hành động",
                          icon: <ExclamationCircleOutlined />,
                          content: "Bạn có chắc muốn thực hiện hành động này?",
                          okText: "Có",
                          cancelText: "Không",
                        });
                      }}
                    >
                      Modal xác nhận
                    </Button>
                    <Button
                      onClick={() => {
                        Modal.info({
                          title: "Thông tin",
                          content:
                            "Đây là modal thông tin với nội dung chi tiết",
                        });
                      }}
                    >
                      Modal thông tin
                    </Button>
                  </Space>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Drawer Component">
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Button
                      type="primary"
                      onClick={() => setDrawerVisible(true)}
                    >
                      Mở Drawer
                    </Button>
                    <Divider />
                    <Text>Drawer xuất hiện từ cạnh màn hình</Text>
                  </Space>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane
            tab={
              <span>
                <LoadingOutlined />
                Loading & Progress
              </span>
            }
            key="3"
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card
                  title="Progress Component"
                  extra={<Rate disabled defaultValue={4} />}
                >
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                    <Progress type="circle" percent={75} />
                    <Progress type="dashboard" percent={75} />
                    <Button
                      type="primary"
                      onClick={showProgress}
                      loading={loading}
                    >
                      {loading ? "Đang xử lý..." : "Bắt đầu tiến trình"}
                    </Button>
                  </Space>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Spin & Skeleton">
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Spin
                      indicator={
                        <LoadingOutlined style={{ fontSize: 24 }} spin />
                      }
                    />
                    <Spin size="large">
                      <div
                        style={{
                          padding: 50,
                          background: "#f5f5f5",
                          borderRadius: 4,
                        }}
                      >
                        Nội dung đang tải
                      </div>
                    </Spin>
                    <Divider />
                    <Button onClick={toggleSkeleton}>
                      Toggle Skeleton ({skeletonLoading ? "Tắt" : "Bật"})
                    </Button>
                    <Skeleton
                      loading={skeletonLoading}
                      avatar
                      paragraph={{ rows: 4 }}
                    >
                      <div>
                        <h4>Nội dung thực tế</h4>
                        <p>Đây là nội dung thực tế sau khi loading hoàn tất</p>
                      </div>
                    </Skeleton>
                  </Space>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane
            tab={
              <span>
                <WarningOutlined />
                Alert & Popover
              </span>
            }
            key="4"
          >
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Card title="Alert Component">
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Alert
                    message="Thành công"
                    type="success"
                    showIcon
                    closable
                  />
                  <Alert message="Thông tin" type="info" showIcon closable />
                  <Alert message="Cảnh báo" type="warning" showIcon closable />
                  <Alert message="Lỗi" type="error" showIcon closable />
                  <Alert
                    message="Alert với mô tả"
                    description="Đây là mô tả chi tiết cho alert này với nhiều thông tin hơn"
                    type="info"
                    showIcon
                    closable
                  />
                </Space>
              </Card>

              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card title="Popconfirm Component">
                    <Space wrap>
                      <Popconfirm
                        title="Xóa mục này?"
                        onConfirm={() => message.success("Đã xóa")}
                        onCancel={() => message.info("Đã hủy")}
                        okText="Có"
                        cancelText="Không"
                      >
                        <Button danger icon={<DeleteOutlined />}>
                          Xóa
                        </Button>
                      </Popconfirm>

                      <Popconfirm
                        title="Thực hiện hành động?"
                        icon={
                          <QuestionCircleOutlined style={{ color: "red" }} />
                        }
                        onConfirm={() => message.success("Đã thực hiện")}
                      >
                        <Button type="primary">Thực hiện</Button>
                      </Popconfirm>
                    </Space>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Popover & Tooltip">
                    <Space wrap>
                      <Tooltip title="Đây là tooltip đơn giản">
                        <Button>Hover để xem tooltip</Button>
                      </Tooltip>

                      <Popover
                        content={
                          <div style={{ width: 200 }}>
                            <p>
                              <strong>Thông tin chi tiết</strong>
                            </p>
                            <p>Nội dung trong popover có thể rất phong phú</p>
                            <Space>
                              <Button size="small" type="primary">
                                Hành động 1
                              </Button>
                              <Button size="small">Hành động 2</Button>
                            </Space>
                          </div>
                        }
                        title="Tiêu đề Popover"
                        trigger="click"
                      >
                        <Button type="dashed">Click để xem popover</Button>
                      </Popover>
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Space>
          </TabPane>

          <TabPane
            tab={
              <span>
                <SmileOutlined />
                Result & Empty
              </span>
            }
            key="5"
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card title="Result Component">
                  <Result
                    icon={<SmileOutlined />}
                    title="Hoàn thành xuất sắc!"
                    subTitle="Bạn đã hoàn tất tất cả các bước cần thiết"
                    extra={[
                      <Button type="primary" key="console">
                        Tiếp tục
                      </Button>,
                      <Button key="buy">Quay lại</Button>,
                    ]}
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Empty State">
                  <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{ height: 60 }}
                    description={<span>Không có dữ liệu để hiển thị</span>}
                  >
                    <Button type="primary">Tạo mới</Button>
                  </Empty>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane
            tab={
              <span>
                <FileTextOutlined />
                Steps & Timeline
              </span>
            }
            key="6"
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card title="Steps Component">
                  <Steps current={1}>
                    <Step
                      title="Bước 1"
                      description="Chuẩn bị dữ liệu"
                      icon={<UserOutlined />}
                    />
                    <Step
                      title="Bước 2"
                      description="Xử lý thông tin"
                      icon={<LoadingOutlined />}
                    />
                    <Step
                      title="Bước 3"
                      description="Hoàn thành"
                      icon={<SmileOutlined />}
                    />
                  </Steps>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Timeline Component">
                  <Timeline>
                    <Timeline.Item color="green">
                      <div>
                        <p>
                          <strong>Bắt đầu dự án</strong>
                        </p>
                        <p>2024-01-01 09:00</p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item color="blue">
                      <div>
                        <p>
                          <strong>Hoàn thành milestone 1</strong>
                        </p>
                        <p>2024-01-15 14:30</p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item color="red">
                      <div>
                        <p>
                          <strong>Gặp vấn đề</strong>
                        </p>
                        <p>2024-01-20 10:15</p>
                      </div>
                    </Timeline.Item>
                  </Timeline>
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane
            tab={
              <span>
                <TeamOutlined />
                Interactive
              </span>
            }
            key="7"
          >
            <Card title="Interactive Components">
              <Collapse>
                <Panel header="Đánh giá & Phản hồi" key="1">
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <div>
                      <Text strong>Đánh giá sản phẩm:</Text>
                      <Rate allowHalf defaultValue={4.5} />
                    </div>
                    <div>
                      <Text strong>Yêu thích:</Text>
                      <Space>
                        <Button icon={<HeartOutlined />} type="text">
                          Yêu thích
                        </Button>
                        <Button icon={<LikeOutlined />} type="text">
                          Thích
                        </Button>
                        <Button icon={<StarOutlined />} type="text">
                          Đánh dấu
                        </Button>
                        <Button icon={<ShareAltOutlined />} type="text">
                          Chia sẻ
                        </Button>
                      </Space>
                    </div>
                  </Space>
                </Panel>
                <Panel header="Thông tin bổ sung" key="2">
                  <Descriptions bordered>
                    <Descriptions.Item label="Trạng thái">
                      <Badge status="success" text="Hoạt động" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Loại">
                      <Tag color="blue">Premium</Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label="Đánh giá">
                      <Rate disabled defaultValue={5} />
                    </Descriptions.Item>
                  </Descriptions>
                </Panel>
              </Collapse>
            </Card>
          </TabPane>
        </Tabs>

        {/* Modals */}
        <Modal
          title="Hộp thoại cơ bản"
          visible={modalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
          footer={[
            <Button key="back" onClick={() => setModalVisible(false)}>
              Hủy
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={() => setModalVisible(false)}
            >
              Đồng ý
            </Button>,
          ]}
        >
          <Space direction="vertical">
            <p>Nội dung modal có thể chứa nhiều thông tin</p>
            <Alert message="Thông báo trong modal" type="info" showIcon />
            <Progress percent={80} />
          </Space>
        </Modal>

        <Drawer
          title="Drawer với nội dung phong phú"
          placement="right"
          width={500}
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
          extra={
            <Space>
              <Button onClick={() => setDrawerVisible(false)}>Hủy</Button>
              <Button type="primary" onClick={() => setDrawerVisible(false)}>
                Lưu
              </Button>
            </Space>
          }
        >
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Alert message="Drawer thông tin" type="info" />
            <Descriptions title="Chi tiết" bordered>
              <Descriptions.Item label="Tên">John Doe</Descriptions.Item>
              <Descriptions.Item label="Email">
                john@example.com
              </Descriptions.Item>
              <Descriptions.Item label="Trạng thái">
                <Badge status="success" text="Hoạt động" />
              </Descriptions.Item>
            </Descriptions>
            <div>
              <Text strong>Đánh giá:</Text>
              <Rate allowHalf defaultValue={4.5} />
            </div>
          </Space>
        </Drawer>

        {/* Affix */}
        <Affix offsetBottom={20}>
          <Button type="primary" style={{ marginLeft: 20 }}>
            Nút cố định
          </Button>
        </Affix>
      </Space>
    </div>
  );
};

export default FeedbackDemo;
