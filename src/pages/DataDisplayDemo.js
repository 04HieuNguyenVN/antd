import React from "react";
import {
  Table,
  Button,
  Space,
  Popconfirm,
  Card,
  Typography,
  Divider,
} from "antd";
import {
  BoxPlotOutlined,
  CloudOutlined,
  PieChartOutlined,
  AppstoreOutlined,
  BarsOutlined,
  FormOutlined,
  AlertOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const DataDisplayDemo = () => {
  // Dữ liệu bảng ví dụ
  const tableData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
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

  // Cấu hình các cột của bảng
  const columns = [
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
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
          <a>Chỉnh sửa</a>
          <a>Xoá</a>
        </Space>
      ),
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {/* Tiêu đề chính */}
      <Title level={2}>Thành phần Hiển thị Dữ liệu</Title>

      {/* Phần bảng */}
      <Divider orientation="left">Ví dụ Bảng</Divider>
      <Card>
        <Table columns={columns} dataSource={tableData} />
      </Card>

      {/* Phần thẻ */}
      <Divider orientation="left">Ví dụ Thẻ</Divider>
      <Card
        title="Tiêu đề thẻ"
        extra={<a href="#">Xem thêm</a>}
        style={{ width: 300 }}
      >
        <p>Nội dung thẻ</p>
        <p>Nội dung thẻ</p>
        <p>Nội dung thẻ</p>
      </Card>

      {/* Có thể thêm các thành phần hiển thị dữ liệu khác tại đây */}
    </Space>
  );
};

export default DataDisplayDemo;
