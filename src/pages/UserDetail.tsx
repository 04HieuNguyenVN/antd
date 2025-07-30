import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Form,
  Input,
  Button,
  Avatar,
  Space,
  Typography,
  Row,
  Col,
  message,
  DatePicker,
  Upload,
  Divider,
  Alert,
  Badge,
  Tag,
  Modal,
} from "antd";
import {
  ArrowLeftOutlined,
  EditOutlined,
  DeleteOutlined,
  SaveOutlined,
  CloseOutlined,
  UserOutlined,
  UploadOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { updateItem, deleteItem } from "../store/tablesSlice";
import { RootState } from "../store";
import { TableItem, UploadFile } from "../types";
import dayjs from "dayjs";

const { Title, Text } = Typography;

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  // State management
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
  const [initialFormValues, setInitialFormValues] = useState<any>(null);

  // Get user data from Redux store
  const user = useSelector((state: RootState) =>
    state.tables.data.find((item: TableItem) => item.key === id)
  );

  useEffect(() => {
    if (user) {
      const formValues = {
        ...user,
        birthDate: user.birthDate ? dayjs(user.birthDate) : null,
      };
      form.setFieldsValue(formValues);
      setInitialFormValues(formValues);
    }
  }, [user, form]);

  // Effect để theo dõi form changes
  useEffect(() => {
    if (!isEditing || !initialFormValues) {
      setHasUnsavedChanges(false);
      return;
    }

    const checkFormChanges = () => {
      const currentValues = form.getFieldsValue();
      const hasChanges =
        JSON.stringify(currentValues) !== JSON.stringify(initialFormValues);
      setHasUnsavedChanges(hasChanges);
    };

    // Check immediately
    checkFormChanges();

    // Set up interval to check changes
    const interval = setInterval(checkFormChanges, 500);
    return () => clearInterval(interval);
  }, [isEditing, initialFormValues, form]);

  // Hiển thị cảnh báo khi rời trang với thay đổi chưa lưu
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  // Handle form submission
  const handleUpdate = async (values: any) => {
    if (!user) return;

    setLoading(true);
    try {
      const updatedUser = {
        ...user,
        ...values,
        birthDate: values.birthDate
          ? values.birthDate.format("YYYY-MM-DD")
          : user.birthDate,
        age: values.birthDate
          ? dayjs().diff(values.birthDate, "year")
          : user.age,
      };

      dispatch(updateItem(updatedUser));
      setIsEditing(false);
      setHasUnsavedChanges(false);

      // Cập nhật lại initial values
      const newFormValues = {
        ...updatedUser,
        birthDate: updatedUser.birthDate ? dayjs(updatedUser.birthDate) : null,
      };
      setInitialFormValues(newFormValues);

      message.success(`Cập nhật thông tin ${values.name} thành công!`);
    } catch (error) {
      message.error("Có lỗi xảy ra khi cập nhật thông tin!");
    } finally {
      setLoading(false);
    }
  };

  // Handle user deletion
  const handleDelete = () => {
    if (!user || !id) return;

    Modal.confirm({
      title: "Xác nhận xóa người dùng",
      content: (
        <div>
          <p>
            Bạn có chắc chắn muốn xóa <strong>{user.name}</strong> không?
          </p>
          <Alert
            message="Cảnh báo: Hành động này không thể hoàn tác!"
            type="warning"
            showIcon
            style={{ marginTop: "12px" }}
          />
        </div>
      ),
      okText: "Xóa",
      cancelText: "Hủy",
      okType: "danger",
      icon: <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />,
      onOk: () => {
        dispatch(deleteItem(id));
        message.success(`Đã xóa ${user.name} khỏi danh sách!`);
        navigate("/tables");
      },
    });
  };

  // Handle back navigation
  const handleBack = () => {
    if (!user) return;

    if (isEditing) {
      if (hasUnsavedChanges) {
        Modal.confirm({
          title: "Thay đổi chưa được lưu",
          content:
            "Bạn có những thay đổi chưa được lưu. Bạn có muốn hủy bỏ các thay đổi này không?",
          okText: "Hủy thay đổi",
          cancelText: "Tiếp tục chỉnh sửa",
          okType: "danger",
          icon: <ExclamationCircleOutlined style={{ color: "#faad14" }} />,
          onOk: () => {
            setIsEditing(false);
            setHasUnsavedChanges(false);
            form.setFieldsValue({
              ...user,
              birthDate: user.birthDate ? dayjs(user.birthDate) : null,
            });
          },
        });
      } else {
        setIsEditing(false);
        form.setFieldsValue({
          ...user,
          birthDate: user.birthDate ? dayjs(user.birthDate) : null,
        });
      }
    } else {
      navigate("/tables");
    }
  };

  // Handle avatar upload
  const handleAvatarUpload = (info: any) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  if (!user) {
    return (
      <div className="user-detail-padding-24">
        <Alert
          message="Không tìm thấy người dùng"
          description="Người dùng có thể đã bị xóa hoặc không tồn tại."
          type="error"
          showIcon
          action={
            <Button size="small" danger onClick={() => navigate("/tables")}>
              Quay lại danh sách
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: "24px" }}
      >
        <Col>
          <Space>
            <Button
              icon={<ArrowLeftOutlined />}
              onClick={handleBack}
              type={isEditing ? "default" : "text"}
            >
              {isEditing ? "Hủy" : "Quay lại"}
            </Button>
            <Title level={2} className="user-detail-margin-0">
              {isEditing ? "Chỉnh sửa thông tin" : "Thông tin chi tiết"}
              {hasUnsavedChanges && (
                <Tag color="warning" style={{ marginLeft: 8 }}>
                  Chưa lưu
                </Tag>
              )}
            </Title>
            <Badge
              status={user.age > 30 ? "success" : "processing"}
              text={user.age > 30 ? "Senior" : "Junior"}
            />
          </Space>
        </Col>
        <Col>
          {!isEditing && (
            <Space>
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => {
                  setIsEditing(true);
                  message.info(
                    "Bạn đang chỉnh sửa thông tin. Nhớ lưu thay đổi trước khi rời trang!"
                  );
                }}
              >
                Chỉnh sửa
              </Button>
              <Button danger icon={<DeleteOutlined />} onClick={handleDelete}>
                Xóa
              </Button>
            </Space>
          )}
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        {/* Left Column - Avatar & Basic Info */}
        <Col xs={24} md={8}>
          <Card>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <Avatar
                size={120}
                src={user.avatar}
                icon={<UserOutlined />}
                style={{ marginBottom: "16px" }}
              />
              {isEditing && (
                <Upload
                  name="avatar"
                  listType="text"
                  onChange={handleAvatarUpload}
                  showUploadList={false}
                >
                  <Button icon={<UploadOutlined />} size="small">
                    Đổi ảnh đại diện
                  </Button>
                </Upload>
              )}
            </div>

            <div className="user-detail-center">
              <Title level={3} style={{ marginBottom: "8px" }}>
                {user.name}
              </Title>
              <Space direction="vertical" size="small">
                <Tag color="blue">{user.age} tuổi</Tag>
                <Text type="secondary">{user.email}</Text>
                <Text type="secondary">{user.phone}</Text>
              </Space>
            </div>

            <Divider />

            <Space direction="vertical" className="user-detail-width-100">
              <div>
                <Text strong>Trạng thái:</Text>
                <br />
                <Badge
                  status="success"
                  text="Đang hoạt động"
                  style={{ marginTop: "4px" }}
                />
              </div>
              <div>
                <Text strong>Ngày tham gia:</Text>
                <br />
                <Text>
                  {dayjs()
                    .subtract(Math.floor(Math.random() * 365), "day")
                    .format("DD/MM/YYYY")}
                </Text>
              </div>
              <div>
                <Text strong>Lần cuối đăng nhập:</Text>
                <br />
                <Text>
                  {dayjs()
                    .subtract(Math.floor(Math.random() * 7), "day")
                    .format("DD/MM/YYYY HH:mm")}
                </Text>
              </div>
            </Space>
          </Card>
        </Col>

        {/* Right Column - Detailed Information */}
        <Col xs={24} md={16}>
          <Card
            title={isEditing ? "Chỉnh sửa thông tin" : "Thông tin chi tiết"}
            extra={
              isEditing && (
                <Space>
                  <Button
                    icon={<CloseOutlined />}
                    onClick={() => setIsEditing(false)}
                  >
                    Hủy
                  </Button>
                  <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    loading={loading}
                    onClick={() => form.submit()}
                  >
                    Lưu
                  </Button>
                </Space>
              )
            }
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdate}
              initialValues={{
                ...user,
                birthDate: user.birthDate ? dayjs(user.birthDate) : null,
              }}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Họ và tên"
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập họ tên!" },
                      { min: 2, message: "Họ tên phải có ít nhất 2 ký tự!" },
                    ]}
                  >
                    <Input
                      placeholder="Nhập họ và tên"
                      disabled={!isEditing}
                      prefix={<UserOutlined />}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label="Ngày sinh"
                    name="birthDate"
                    rules={[
                      { required: true, message: "Vui lòng chọn ngày sinh!" },
                    ]}
                  >
                    <DatePicker
                      className="user-detail-width-100"
                      placeholder="Chọn ngày sinh"
                      disabled={!isEditing}
                      disabledDate={(current) =>
                        current && current > dayjs().subtract(16, "year")
                      }
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Vui lòng nhập email!" },
                      { type: "email", message: "Email không hợp lệ!" },
                    ]}
                  >
                    <Input
                      placeholder="Nhập địa chỉ email"
                      disabled={!isEditing}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số điện thoại!",
                      },
                      {
                        pattern: /^[0-9]{10,11}$/,
                        message: "Số điện thoại không hợp lệ!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Nhập số điện thoại"
                      disabled={!isEditing}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24}>
                  <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[
                      { required: true, message: "Vui lòng nhập địa chỉ!" },
                    ]}
                  >
                    <Input.TextArea
                      rows={3}
                      placeholder="Nhập địa chỉ chi tiết"
                      disabled={!isEditing}
                    />
                  </Form.Item>
                </Col>
              </Row>

              {isEditing && (
                <Row justify="end" style={{ marginTop: "24px" }}>
                  <Space>
                    <Button
                      onClick={() => setIsEditing(false)}
                      icon={<CloseOutlined />}
                    >
                      Hủy
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      icon={<SaveOutlined />}
                    >
                      Lưu thay đổi
                    </Button>
                  </Space>
                </Row>
              )}
            </Form>
          </Card>

          {/* Additional Info Card */}
          <Card title="Thông tin bổ sung" style={{ marginTop: "16px" }}>
            <Row gutter={[16, 16]}>
              <Col xs={12} md={6}>
                <Text strong>ID:</Text>
                <br />
                <Text code>{user.key}</Text>
              </Col>
              <Col xs={12} md={6}>
                <Text strong>Tuổi:</Text>
                <br />
                <Text>{user.age} tuổi</Text>
              </Col>
              <Col xs={12} md={6}>
                <Text strong>Trạng thái:</Text>
                <br />
                <Badge status="success" text="Hoạt động" />
              </Col>
              <Col xs={12} md={6}>
                <Text strong>Loại tài khoản:</Text>
                <br />
                <Tag color={user.age > 30 ? "green" : "blue"}>
                  {user.age > 30 ? "Senior" : "Junior"}
                </Tag>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UserDetail;
