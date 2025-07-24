/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Space,
  Typography,
  Popconfirm,
  message,
  Upload,
  Image,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { addItem, updateItem, deleteItem } from "../store/tablesSlice";

const { Title } = Typography;

// Hàm chuyển file hình ảnh sang định dạng base64
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const TablesDemo = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const dataSource = useSelector((state) => state.tables.data); // Lấy danh sách từ Redux

  // State quản lý modal và trạng thái chỉnh sửa
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [fileList, setFileList] = useState([]);

  // Thêm mục mới
  const handleAddItem = () => {
    setEditingItem(null);
    form.resetFields();
    setFileList([]);
    setIsModalVisible(true);
  };

  // Sửa mục đã có
  const handleEditItem = (record) => {
    setEditingItem(record);
    form.setFieldsValue(record);
    setFileList(
      record.avatar
        ? [{ uid: "-1", name: "image.png", status: "done", url: record.avatar }]
        : []
    );
    setIsModalVisible(true);
  };

  // Xóa mục
  const handleDeleteItem = (key) => {
    dispatch(deleteItem(key));
    message.success("Xóa thành công");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      let avatarBase64 = editingItem ? editingItem.avatar : null;

      const potentialNewFile = fileList.length > 0 ? fileList[0] : null;
      if (potentialNewFile && potentialNewFile instanceof File) {
        avatarBase64 = await getBase64(potentialNewFile);
      } else if (fileList.length === 0) {
        avatarBase64 = null;
      }

      const itemData = { ...values, avatar: avatarBase64 };

      if (editingItem) {
        dispatch(updateItem({ ...editingItem, ...itemData }));
        message.success("Cập nhật thành công");
      } else {
        dispatch(addItem(itemData));
        message.success("Thêm mới thành công");
      }
      setIsModalVisible(false);
    } catch (info) {
      console.log("Lỗi xác thực:", info);
      message.error("Vui lòng kiểm tra dữ liệu");
    }
  };

  // Cấu hình upload hình ảnh
  const uploadProps = {
    onRemove: () => {
      setFileList([]);
    },
    beforeUpload: (file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("Chỉ cho phép tải lên định dạng JPG/PNG!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Ảnh phải nhỏ hơn 2MB!");
      }
      if (isJpgOrPng && isLt2M) {
        setFileList([file]);
      }
      return false; // Không tự động upload
    },
    fileList,
    listType: "picture",
    maxCount: 1,
  };

  // Cấu hình cột bảng
  const columns = [
    {
      title: "Ảnh đại diện",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => (
        <Image
          width={50}
          src={avatar}
          fallback="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDIiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxwYXRoIGQ9Ik0wIDBoMXYxSDB6IiBmaWxsPSIjZGRkIj48L3BhdGg+PC9zdmc+"
        />
      ),
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEditItem(record)}>Sửa</a>
          <Popconfirm
            title="Bạn có chắc muốn xóa mục này không?"
            onConfirm={() => handleDeleteItem(record.key)}
            okText="Có"
            cancelText="Không"
          >
            <a>Xóa</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Title level={2}>Quản lý bảng (CRUD)</Title>
      <Button
        onClick={handleAddItem}
        type="primary"
        style={{ marginBottom: 16 }}
      >
        Thêm mới
      </Button>

      <Table columns={columns} dataSource={dataSource} rowKey="key" />

      <Modal
        title={editingItem ? "Chỉnh sửa mục" : "Thêm mới mục"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
        forceRender
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ age: 18 }}
        >
          <Form.Item
            name="name"
            label="Tên"
            rules={[
              { required: true, message: "Vui lòng nhập tên!" },
              { min: 3, message: "Tên phải có ít nhất 3 ký tự." },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Tuổi"
            rules={[
              { required: true, message: "Vui lòng nhập tuổi!" },
              {
                type: "number",
                min: 18,
                max: 99,
                message: "Tuổi phải từ 18 đến 99.",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="avatar" label="Ảnh đại diện">
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TablesDemo;
