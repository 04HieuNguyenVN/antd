/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../styles/pages/TablesDemo.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  DatePicker,
  Tooltip,
  Card,
  Row,
  Col,
  Select,
  Tag,
  Badge,
  Statistic,
  Progress,
  Alert,
  Radio,
  Checkbox,
  Slider,
  Rate,
  Drawer,
  Descriptions,
  Timeline,
  Result,
  Empty,
  BackTop,
  Tabs,
  Collapse,
  Segmented,
} from "antd";
import {
  UploadOutlined,
  SearchOutlined,
  FilterOutlined,
  ExportOutlined,
  ImportOutlined,
  ReloadOutlined,
  SettingOutlined,
  EyeOutlined,
  UserOutlined,
  TeamOutlined,
  CalendarOutlined,
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
  DownloadOutlined,
  PrinterOutlined,
  ShareAltOutlined,
  StarOutlined,
  HeartOutlined,
  LikeOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { addItem, updateItem, deleteItem } from "../store/tablesSlice";
import { RootState } from "../store";
import { TableItem, TableSettings } from "../types";
import dayjs from "dayjs";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { Panel } = Collapse;
const { TabPane } = Tabs;

// Hàm chuyển file hình ảnh sang định dạng base64
const getBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

// Hàm tính tuổi từ ngày sinh
const calculateAge = (birthDate: string | null): number => {
  if (!birthDate) return 0;
  const today = dayjs();
  const birth = dayjs(birthDate);
  return today.diff(birth, "year");
};

const TablesDemo: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataSource = useSelector((state: RootState) => state.tables.data);

  // State quản lý modal và trạng thái chỉnh sửa
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<TableItem | null>(null);
  const [fileList, setFileList] = useState<any[]>([]);

  // State mới cho các tính năng bổ sung
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState<TableItem[]>(dataSource);
  const [tableLoading, setTableLoading] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<string>("table");
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<TableItem | null>(null);
  const [tableSettings, setTableSettings] = useState<TableSettings>({
    showBorder: true,
    size: "middle",
    showHeader: true,
    pagination: true,
  });
  const [activeTab, setActiveTab] = useState<string>("1");
  const [exportLoading, setExportLoading] = useState<boolean>(false);
  const [importLoading, setImportLoading] = useState<boolean>(false);

  // Effect để cập nhật dữ liệu đã lọc
  useEffect(() => {
    if (searchText) {
      const filtered = dataSource.filter((item) =>
        Object.values(item).some(
          (value) =>
            value &&
            value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(dataSource);
    }
  }, [dataSource, searchText]);

  // Các hàm xử lý mới
  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const handleRefresh = () => {
    setTableLoading(true);
    setTimeout(() => {
      setTableLoading(false);
      message.success("Dữ liệu đã được làm mới");
    }, 1000);
  };

  const handleExport = () => {
    setExportLoading(true);
    setTimeout(() => {
      setExportLoading(false);
      message.success("Xuất dữ liệu thành công");
    }, 2000);
  };

  const handleImport = () => {
    setImportLoading(true);
    setTimeout(() => {
      setImportLoading(false);
      message.success("Nhập dữ liệu thành công");
    }, 1500);
  };

  const handleViewRecord = (record: TableItem) => {
    setSelectedRecord(record);
    setDrawerVisible(true);
  };

  const handleBatchDelete = () => {
    if (selectedRowKeys.length === 0) {
      message.warning("Vui lòng chọn ít nhất một mục để xóa");
      return;
    }

    Modal.confirm({
      title: "Xác nhận xóa hàng loạt",
      content: `Bạn có chắc muốn xóa ${selectedRowKeys.length} mục đã chọn?`,
      onOk: () => {
        selectedRowKeys.forEach((key) => {
          dispatch(deleteItem(key.toString()));
        });
        setSelectedRowKeys([]);
        message.success(`Đã xóa ${selectedRowKeys.length} mục`);
      },
    });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
    onSelectAll: (
      selected: boolean,
      selectedRows: TableItem[],
      changeRows: TableItem[]
    ) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  // Thêm mục mới
  const handleAddItem = () => {
    setEditingItem(null);
    form.resetFields();
    setFileList([]);
    setIsModalVisible(true);
  };

  // Sửa mục đã có
  const handleEditItem = (record: TableItem) => {
    setEditingItem(record);
    const formValues = {
      ...record,
      birthDate: record.birthDate ? dayjs(record.birthDate) : null,
    };
    form.setFieldsValue(formValues);
    setFileList(
      record.avatar
        ? [{ uid: "-1", name: "image.png", status: "done", url: record.avatar }]
        : []
    );
    setIsModalVisible(true);
  };

  // Xóa mục
  const handleDeleteItem = (key: string) => {
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

      // Tự động tính tuổi từ ngày sinh
      const birthDate = values.birthDate
        ? values.birthDate.format("YYYY-MM-DD")
        : null;
      const age = calculateAge(birthDate);

      const itemData = {
        ...values,
        avatar: avatarBase64,
        birthDate: birthDate,
        age: age,
      };

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

  // Xử lý khi thay đổi ngày sinh để tự động cập nhật tuổi
  const handleBirthDateChange = (date: any) => {
    if (date) {
      const age = calculateAge(date.format("YYYY-MM-DD"));
      form.setFieldsValue({ age });
    } else {
      form.setFieldsValue({ age: 0 });
    }
  };

  // Cấu hình upload hình ảnh
  const uploadProps = {
    onRemove: () => {
      setFileList([]);
    },
    beforeUpload: (file: File) => {
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
    listType: "picture" as const,
    maxCount: 1,
  };

  // Cấu hình cột bảng
  const columns = [
    {
      title: (
        <Tooltip title="Ảnh đại diện của người dùng">
          <span>Ảnh đại diện</span>
        </Tooltip>
      ),
      dataIndex: "avatar",
      key: "avatar",
      width: 120, // Đặt width cố định cho cột ảnh
      render: (avatar: string, record: TableItem) => (
        <Tooltip
          title={
            <div>
              <div>
                <strong>{record.name}</strong>
              </div>
              <div>Click để xem ảnh phóng to</div>
            </div>
          }
          placement="right"
        >
          <Image
            width={80}
            height={80}
            src={avatar}
            className="avatar-preview"
            // fallback="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDIiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxwYXRoIGQ9Ik0wIDBoMXYxSDB6IiBmaWxsPSIjZGRkIj48L3BhdGg+PC9zdmc+"
          />
        </Tooltip>
      ),
    },
    {
      title: (
        <Tooltip title="Họ và tên đầy đủ">
          <span>Tên</span>
        </Tooltip>
      ),
      dataIndex: "name",
      key: "name",
      sorter: (a: TableItem, b: TableItem) => a.name.localeCompare(b.name),
      render: (name: string) => (
        <Tooltip title={`Tên đầy đủ: ${name}`}>
          <span className="name-text">
            {name.length > 15 ? `${name.substring(0, 15)}...` : name}
          </span>
        </Tooltip>
      ),
    },
    {
      title: (
        <Tooltip title="Ngày tháng năm sinh">
          <span>Ngày sinh</span>
        </Tooltip>
      ),
      dataIndex: "birthDate",
      key: "birthDate",
      render: (birthDate: string, record: TableItem) => {
        const formattedDate = birthDate
          ? dayjs(birthDate).format("DD/MM/YYYY")
          : "-";
        const age = record.age;
        return (
          <Tooltip
            title={
              <div>
                <div>
                  <strong>Ngày sinh:</strong> {formattedDate}
                </div>
                <div>
                  <strong>Tuổi hiện tại:</strong> {age} tuổi
                </div>
                {birthDate && (
                  <div>
                    <strong>Sinh năm:</strong> {dayjs(birthDate).format("YYYY")}
                  </div>
                )}
              </div>
            }
          >
            <span className="cursor-default">{formattedDate}</span>
          </Tooltip>
        );
      },
      sorter: (a: TableItem, b: TableItem) => {
        if (!a.birthDate && !b.birthDate) return 0;
        if (!a.birthDate) return 1;
        if (!b.birthDate) return -1;
        return dayjs(a.birthDate).unix() - dayjs(b.birthDate).unix();
      },
    },
    {
      title: (
        <Tooltip title="Tuổi được tính tự động từ ngày sinh">
          <span>Tuổi</span>
        </Tooltip>
      ),
      dataIndex: "age",
      key: "age",
      sorter: (a: TableItem, b: TableItem) => a.age - b.age,
      render: (age: number, record: TableItem) => (
        <Tooltip
          title={
            <div>
              <div>
                <strong>Tuổi:</strong> {age} tuổi
              </div>
              {record.birthDate && (
                <div>
                  <strong>Sinh năm:</strong>{" "}
                  {dayjs(record.birthDate).format("YYYY")}
                </div>
              )}
              <div>
                <em>Được tính tự động từ ngày sinh</em>
              </div>
            </div>
          }
        >
          <span
            style={{
              cursor: "default",
              fontWeight: "500",
              color: age >= 50 ? "#ff4d4f" : age >= 30 ? "#faad14" : "#52c41a",
            }}
          >
            {age} tuổi
          </span>
        </Tooltip>
      ),
    },
    {
      title: (
        <Tooltip title="Địa chỉ hiện tại">
          <span>Địa chỉ</span>
        </Tooltip>
      ),
      dataIndex: "address",
      key: "address",
      render: (address: string) => (
        <Tooltip title={`Địa chỉ đầy đủ: ${address}`}>
          <span className="cursor-default">
            {address && address.length > 25
              ? `${address.substring(0, 25)}...`
              : address}
          </span>
        </Tooltip>
      ),
    },
    {
      title: (
        <Tooltip title="Số điện thoại">
          <span>Số điện thoại </span>
        </Tooltip>
      ),
      dataIndex: "phone",
      key: "phone",
      render: (phone: string) => (
        <Tooltip title={`Số điện thoại: ${phone}`}>
          <span className="cursor-default">
            {phone && phone.length > 25
              ? `${phone.substring(0, 25)}...`
              : phone}
          </span>
        </Tooltip>
      ),
    },
    {
      title: (
        <Tooltip title="email">
          <span>email</span>
        </Tooltip>
      ),
      dataIndex: "email",
      key: "email",
      render: (email: string) => (
        <Tooltip title={`Email: ${email}`}>
          <span className="cursor-default">
            {email && email.length > 25
              ? `${email.substring(0, 25)}...`
              : email}
          </span>
        </Tooltip>
      ),
    },
    {
      title: (
        <Tooltip title="Các thao tác có thể thực hiện">
          <span>Hành động</span>
        </Tooltip>
      ),
      key: "action",
      width: 280, // Tăng width để chứa thêm button
      render: (_: any, record: TableItem) => (
        <Space size="small">
          <Tooltip title="Xem chi tiết đầy đủ" placement="top">
            <Button
              type="primary"
              icon={<EyeOutlined />}
              onClick={() => navigate(`/item/${record.key}`)}
              size="small"
            >
              Chi tiết
            </Button>
          </Tooltip>
          <Tooltip title="Xem nhanh" placement="top">
            <Button
              type="link"
              icon={<EyeOutlined />}
              onClick={() => handleViewRecord(record)}
              size="small"
            >
              Xem nhanh
            </Button>
          </Tooltip>
          <Tooltip title="Chỉnh sửa thông tin" placement="top">
            <Button
              type="link"
              onClick={() => handleEditItem(record)}
              size="small"
              className="text-primary"
            >
              Sửa
            </Button>
          </Tooltip>
          <Popconfirm
            title={
              <div>
                <div>
                  <strong>Xác nhận xóa</strong>
                </div>
                <div>
                  Bạn có chắc muốn xóa <strong>{record.name}</strong> không?
                </div>
                <div className="metadata-text">
                  Hành động này không thể hoàn tác
                </div>
              </div>
            }
            onConfirm={() => handleDeleteItem(record.key)}
            okText="Xóa"
            cancelText="Hủy"
            okType="danger"
            placement="topRight"
          >
            <Tooltip title="Xóa người dùng này" placement="top">
              <Button type="link" danger size="small">
                Xóa
              </Button>
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <BackTop />

      <Space direction="vertical" size="large" className="tables-demo-table">
        {/* Header với Alert */}
        <Alert
          message="Quản lý dữ liệu người dùng"
          description="Trang này cho phép bạn quản lý danh sách người dùng với các tính năng CRUD đầy đủ"
          type="info"
          showIcon
          closable
        />

        {/* Title và Statistics */}
        <div>
          <Title level={2}>
            <TeamOutlined className="tables-demo-header" />
            Quản lý bảng (CRUD)
          </Title>

          <Row gutter={16} className="tables-demo-row">
            <Col span={6}>
              <Card>
                <Statistic
                  title="Tổng số người dùng"
                  value={dataSource.length}
                  prefix={<UserOutlined />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="Đã chọn"
                  value={selectedRowKeys.length}
                  prefix={<TeamOutlined />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Statistic
                  title="Đang hiển thị"
                  value={filteredData.length}
                  prefix={<EyeOutlined />}
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Progress
                  type="circle"
                  percent={Math.round(
                    (filteredData.length / dataSource.length) * 100
                  )}
                  size={60 as any}
                  format={() => `${filteredData.length}/${dataSource.length}`}
                />
              </Card>
            </Col>
          </Row>
        </div>

        {/* Control Panel */}
        <Card
          title="Bảng điều khiển"
          extra={
            <Segmented
              options={[
                { label: "Bảng", value: "table", icon: <BarChartOutlined /> },
                {
                  label: "Thống kê",
                  value: "stats",
                  icon: <PieChartOutlined />,
                },
                {
                  label: "Cài đặt",
                  value: "settings",
                  icon: <SettingOutlined />,
                },
              ]}
              value={viewMode}
              onChange={(value) => setViewMode(value as string)}
            />
          }
        >
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Input.Search
                placeholder="Tìm kiếm theo tất cả trường..."
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={handleSearch}
                className="tables-demo-table"
              />
            </Col>
            <Col span={16}>
              <Space wrap>
                <Button
                  type="primary"
                  icon={<UserOutlined />}
                  onClick={handleAddItem}
                  size="large"
                >
                  Thêm mới
                </Button>
                <Button
                  icon={<ReloadOutlined />}
                  onClick={handleRefresh}
                  loading={tableLoading}
                >
                  Làm mới
                </Button>
                <Button
                  icon={<ExportOutlined />}
                  onClick={handleExport}
                  loading={exportLoading}
                >
                  Xuất dữ liệu
                </Button>
                <Button
                  icon={<ImportOutlined />}
                  onClick={handleImport}
                  loading={importLoading}
                >
                  Nhập dữ liệu
                </Button>
                <Button
                  danger
                  icon={<FilterOutlined />}
                  onClick={handleBatchDelete}
                  disabled={selectedRowKeys.length === 0}
                >
                  Xóa ({selectedRowKeys.length})
                </Button>
              </Space>
            </Col>
          </Row>
        </Card>

        {/* Tabs cho các view khác nhau */}
        <Tabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane
            tab={
              <span>
                <BarChartOutlined />
                Dữ liệu bảng
              </span>
            }
            key="1"
          >
            {viewMode === "table" && (
              <Card>
                <Table
                  columns={columns}
                  dataSource={filteredData}
                  rowKey="key"
                  size={tableSettings.size}
                  loading={tableLoading}
                  rowSelection={rowSelection}
                  bordered={tableSettings.showBorder}
                  showHeader={tableSettings.showHeader}
                  scroll={{ x: 1200 }}
                  pagination={{
                    pageSize: 8,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: (total, range) =>
                      `${range[0]}-${range[1]} của ${total} mục`,
                    pageSizeOptions: ["5", "8", "10", "20"],
                  }}
                  components={{
                    body: {
                      row: ({ children, ...restProps }: any) => (
                        <tr
                          {...restProps}
                          style={{
                            minHeight: "80px",
                            ...restProps.style,
                          }}
                        >
                          {children}
                        </tr>
                      ),
                    },
                  }}
                />
              </Card>
            )}

            {viewMode === "stats" && (
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card title="Thống kê độ tuổi" extra={<BarChartOutlined />}>
                    <div
                      style={{
                        height: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Result
                        icon={<PieChartOutlined className="text-primary" />}
                        title="Biểu đồ thống kê"
                        subTitle="Tính năng biểu đồ sẽ được cập nhật"
                      />
                    </div>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Phân bố địa chỉ" extra={<LineChartOutlined />}>
                    <div
                      style={{
                        height: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Result
                        icon={<LineChartOutlined className="text-success" />}
                        title="Biểu đồ phân bố"
                        subTitle="Tính năng biểu đồ sẽ được cập nhật"
                      />
                    </div>
                  </Card>
                </Col>
              </Row>
            )}

            {viewMode === "settings" && (
              <Card title="Cài đặt bảng">
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <div>
                      <Text strong>Kích thước bảng:</Text>
                      <br />
                      <Radio.Group
                        value={tableSettings.size}
                        onChange={(e) =>
                          setTableSettings({
                            ...tableSettings,
                            size: e.target.value,
                          })
                        }
                        className="margin-top-8"
                      >
                        <Radio.Button value="small">Nhỏ</Radio.Button>
                        <Radio.Button value="middle">Trung bình</Radio.Button>
                        <Radio.Button value="large">Lớn</Radio.Button>
                      </Radio.Group>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div>
                      <Text strong>Hiển thị:</Text>
                      <br />
                      <Checkbox
                        checked={tableSettings.showBorder}
                        onChange={(e) =>
                          setTableSettings({
                            ...tableSettings,
                            showBorder: e.target.checked,
                          })
                        }
                        className="margin-top-8-block"
                      >
                        Hiển thị viền
                      </Checkbox>
                      <Checkbox
                        checked={tableSettings.showHeader}
                        onChange={(e) =>
                          setTableSettings({
                            ...tableSettings,
                            showHeader: e.target.checked,
                          })
                        }
                        className="margin-top-8-block"
                      >
                        Hiển thị header
                      </Checkbox>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div>
                      <Text strong>Các tính năng khác:</Text>
                      <br />
                      <Space direction="vertical" className="margin-top-8">
                        <Button icon={<DownloadOutlined />} block>
                          Tải xuống PDF
                        </Button>
                        <Button icon={<PrinterOutlined />} block>
                          In bảng
                        </Button>
                        <Button icon={<ShareAltOutlined />} block>
                          Chia sẻ
                        </Button>
                      </Space>
                    </div>
                  </Col>
                </Row>
              </Card>
            )}
          </TabPane>

          <TabPane
            tab={
              <span>
                <CalendarOutlined />
                Timeline hoạt động
              </span>
            }
            key="2"
          >
            <Card>
              <Timeline>
                <Timeline.Item
                  dot={<UserOutlined style={{ fontSize: "16px" }} />}
                  color="green"
                >
                  <div>
                    <Text strong>Thêm người dùng mới</Text>
                    <br />
                    <Text type="secondary">2 phút trước</Text>
                  </div>
                </Timeline.Item>
                <Timeline.Item
                  dot={<EditOutlined style={{ fontSize: "16px" }} />}
                  color="blue"
                >
                  <div>
                    <Text strong>Cập nhật thông tin</Text>
                    <br />
                    <Text type="secondary">5 phút trước</Text>
                  </div>
                </Timeline.Item>
                <Timeline.Item
                  dot={<FilterOutlined style={{ fontSize: "16px" }} />}
                  color="red"
                >
                  <div>
                    <Text strong>Xóa 3 người dùng</Text>
                    <br />
                    <Text type="secondary">10 phút trước</Text>
                  </div>
                </Timeline.Item>
              </Timeline>
            </Card>
          </TabPane>

          <TabPane
            tab={
              <span>
                <SettingOutlined />
                Cấu hình nâng cao
              </span>
            }
            key="3"
          >
            <Collapse>
              <Panel header="Tùy chọn hiển thị" key="1">
                <Row gutter={16}>
                  <Col span={12}>
                    <Text>Số dòng mỗi trang:</Text>
                    <Slider
                      min={5}
                      max={50}
                      defaultValue={10}
                      marks={{
                        5: "5",
                        10: "10",
                        20: "20",
                        50: "50",
                      }}
                    />
                  </Col>
                  <Col span={12}>
                    <Text>Đánh giá chất lượng dữ liệu:</Text>
                    <Rate allowHalf defaultValue={4.5} />
                  </Col>
                </Row>
              </Panel>
              <Panel header="Xuất/Nhập dữ liệu" key="2">
                <Space direction="vertical" className="tables-demo-table">
                  <Alert
                    message="Hỗ trợ định dạng"
                    description="Excel (.xlsx), CSV (.csv), JSON (.json)"
                    type="info"
                    showIcon
                  />
                  <Row gutter={16}>
                    <Col span={12}>
                      <Button block icon={<ExportOutlined />}>
                        Xuất Excel
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button block icon={<ImportOutlined />}>
                        Nhập từ Excel
                      </Button>
                    </Col>
                  </Row>
                </Space>
              </Panel>
              <Panel header="Thống kê nâng cao" key="3">
                <Empty description="Tính năng đang phát triển" />
              </Panel>
            </Collapse>
          </TabPane>
        </Tabs>
      </Space>

      {/* Drawer xem chi tiết */}
      <Drawer
        title="Chi tiết người dùng"
        placement="right"
        width={600}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        {selectedRecord && (
          <Space
            direction="vertical"
            size="large"
            className="tables-demo-table"
          >
            <div className="center-content">
              <Image
                width={120}
                height={120}
                src={selectedRecord.avatar || undefined}
                style={{ borderRadius: "50%", objectFit: "cover" }}
                fallback="data:image/png;base64,..."
              />
              <Title level={3} className="tables-demo-row">
                {selectedRecord.name}
              </Title>
              <Rate disabled defaultValue={5} />
            </div>

            <Descriptions bordered column={1}>
              <Descriptions.Item label="Họ tên">
                <Tag color="blue">{selectedRecord.name}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Tuổi">
                <Badge
                  count={selectedRecord.age}
                  style={{ backgroundColor: "#52c41a" }}
                />
              </Descriptions.Item>
              <Descriptions.Item label="Ngày sinh">
                <Text code>{selectedRecord.birthDate}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Địa chỉ">
                {selectedRecord.address}
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">
                <Text copyable>{selectedRecord.phone}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                <Text copyable>{selectedRecord.email}</Text>
              </Descriptions.Item>
            </Descriptions>

            <Card title="Hành động nhanh">
              <Space wrap>
                <Button type="primary" block icon={<LikeOutlined />}>
                  Thích
                </Button>
                <Button block icon={<StarOutlined />}>
                  Đánh dấu
                </Button>
                <Button block icon={<ShareAltOutlined />}>
                  Chia sẻ
                </Button>
                <Button block icon={<HeartOutlined />} danger>
                  Yêu thích
                </Button>
              </Space>
            </Card>
          </Space>
        )}
      </Drawer>

      {/* Modal form (giữ nguyên) */}
      <Modal
        title={editingItem ? "Chỉnh sửa mục" : "Thêm mới mục"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
        forceRender
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{ age: 0 }}
        >
          <Row gutter={16}>
            <Col span={12}>
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
            </Col>
            <Col span={12}>
              <Form.Item
                name="birthDate"
                label="Ngày sinh"
                rules={[
                  { required: true, message: "Vui lòng chọn ngày sinh!" },
                ]}
              >
                <DatePicker
                  className="tables-demo-table"
                  format="DD/MM/YYYY"
                  placeholder="Chọn ngày sinh"
                  onChange={handleBirthDateChange}
                  disabledDate={(current) => {
                    return current && current > dayjs().endOf("day");
                  }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="age" label="Tuổi">
                <InputNumber
                  min={0}
                  className="tables-demo-table"
                  disabled
                  placeholder="Tuổi sẽ được tính tự động"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                  {
                    pattern: /^(0[3|5|7|8|9])+([0-9]{8})$/,
                    message: "Số điện thoại không hợp lệ!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="avatar" label="Ảnh đại diện">
            <Tooltip title="Chọn ảnh JPG hoặc PNG, tối đa 2MB" placement="top">
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
              </Upload>
            </Tooltip>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TablesDemo;
