import React, { useState } from "react";
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
  Space,
  Typography,
  message,
  Tree,
  Tag,
  Progress,
  Steps,
  Slider,
  Rate,
  TimePicker,
  Cascader,
  AutoComplete,
  Mentions,
  Transfer,
  Avatar,
  Badge,
  Descriptions,
  Statistic,
  Timeline,
  Tooltip,
  Popover,
  Drawer,
  Modal,
  Alert,
  Spin,
  Row,
  Col,
  Divider,
} from "antd";
import {
  UploadOutlined,
  LockOutlined,
  UserOutlined,
  TeamOutlined,
  CalendarOutlined,
  BgColorsOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  ThunderboltOutlined,
  RocketOutlined,
  TrophyOutlined,
  GiftOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined,
  QuestionCircleOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const { Title, Text } = Typography;
const { Option } = Select;
const { Step } = Steps;

const FormDemo: React.FC = () => {
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [passwordSteps, setPasswordSteps] = useState<number>(0);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedDates, setSelectedDates] = useState<string[]>([]); // Danh sách các ngày đã chọn
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [sliderValue, setSliderValue] = useState<number>(30);
  const [ratingValue, setRatingValue] = useState(0);
  const [transferData, setTransferData] = useState<any[]>([]);
  const [targetKeys, setTargetKeys] = useState<string[]>([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<
    { value: string }[]
  >([]);

  // Lấy dữ liệu từ tablesSlice
  const tablesData = useSelector((state: RootState) => state.tables.data);

  // Danh sách màu sắc có sẵn
  const colorOptions = [
    { label: "Đỏ", value: "red", color: "#ff4d4f" },
    { label: "Xanh lá", value: "green", color: "#52c41a" },
    { label: "Xanh dương", value: "blue", color: "#1890ff" },
    { label: "Vàng", value: "yellow", color: "#faad14" },
    { label: "Tím", value: "purple", color: "#722ed1" },
    { label: "Cam", value: "orange", color: "#fa8c16" },
    { label: "Hồng", value: "pink", color: "#eb2f96" },
    { label: "Xanh cyan", value: "cyan", color: "#13c2c2" },
  ];

  // Dữ liệu cho Cascader
  const cascaderOptions = [
    {
      value: "vietnam",
      label: "Việt Nam",
      children: [
        {
          value: "hanoi",
          label: "Hà Nội",
          children: [
            { value: "hoankiem", label: "Hoàn Kiếm" },
            { value: "dongda", label: "Đống Đa" },
            { value: "binhthungha", label: "Ba Đình" },
          ],
        },
        {
          value: "hcm",
          label: "TP.HCM",
          children: [
            { value: "dist1", label: "Quận 1" },
            { value: "dist2", label: "Quận 2" },
            { value: "dist3", label: "Quận 3" },
          ],
        },
      ],
    },
    {
      value: "usa",
      label: "Hoa Kỳ",
      children: [
        {
          value: "newyork",
          label: "New York",
          children: [
            { value: "manhattan", label: "Manhattan" },
            { value: "brooklyn", label: "Brooklyn" },
          ],
        },
      ],
    },
  ];

  // Dữ liệu cho Transfer
  const mockTransferData = Array.from({ length: 20 }, (_, i) => ({
    key: i.toString(),
    title: `Mục ${i + 1}`,
    description: `Mô tả cho mục ${i + 1}`,
    chosen: Math.random() * 2 > 1,
  }));

  // Dữ liệu AutoComplete
  const autoCompleteData = [
    "Burns Bay Road",
    "Downing Street",
    "Wall Street",
    "Đường Lê Lợi",
    "Đường Nguyễn Huệ",
    "Đường Trần Hưng Đạo",
  ];

  // Chuyển đổi dữ liệu từ tablesSlice thành cấu trúc Tree
  const generateTreeData = () => {
    // Tạo cấu trúc tree theo yêu cầu: Danh sách người dùng -> Tên người dùng -> Thông tin người dùng
    const treeData = [
      {
        title: `Danh sách người dùng (${tablesData.length} người)`,
        key: "users-list",
        icon: <TeamOutlined />,
        children: tablesData.map((person) => ({
          title: (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={person.avatar || undefined}
                alt={person.name}
                style={{ width: 20, height: 20, borderRadius: "50%" }}
              />
              <span>{person.name}</span>
              <span style={{ color: "#666", fontSize: "12px" }}>
                ({person.age} tuổi)
              </span>
            </div>
          ),
          key: `user-${person.key}`,
          // icon: <UserOutlined />,
          children: [
            {
              title: `Tên: ${person.name}`,
              key: `user-${person.key}-name`,
              isLeaf: true,
            },
            {
              title: `Tuổi: ${person.age}`,
              key: `user-${person.key}-age`,
              isLeaf: true,
            },
            {
              title: `Địa chỉ: ${person.address}`,
              key: `user-${person.key}-address`,
              isLeaf: true,
            },
            {
              title: `Điện thoại: ${person.phone}`,
              key: `user-${person.key}-phone`,
              isLeaf: true,
            },
            {
              title: `Email: ${person.email}`,
              key: `user-${person.key}-email`,
              isLeaf: true,
            },
          ],
          data: person,
        })),
      },
    ];

    return treeData;
  };

  const treeData = generateTreeData();

  // Hàm đánh giá độ mạnh của mật khẩu
  const calculatePasswordStrength = (password: string) => {
    if (!password) {
      setPasswordStrength(0);
      setPasswordSteps(0);
      return;
    }

    let score = 0;
    let steps = 0;

    // Kiểm tra độ dài
    if (password.length >= 8) {
      score += 20;
      steps = Math.max(steps, 1);
    }
    if (password.length >= 12) {
      score += 10;
    }

    // Kiểm tra chữ thường
    if (/[a-z]/.test(password)) {
      score += 15;
      steps = Math.max(steps, 1);
    }

    // Kiểm tra chữ hoa
    if (/[A-Z]/.test(password)) {
      score += 15;
      steps = Math.max(steps, 2);
    }

    // Kiểm tra số
    if (/[0-9]/.test(password)) {
      score += 15;
      steps = Math.max(steps, 2);
    }

    // Kiểm tra ký tự đặc biệt
    if (/[^A-Za-z0-9]/.test(password)) {
      score += 25;
      steps = Math.max(steps, 3);
    }

    // Điều chỉnh steps dựa trên score
    if (score >= 80) steps = 4;
    else if (score >= 60) steps = 3;
    else if (score >= 40) steps = 2;
    else if (score >= 20) steps = 1;

    setPasswordStrength(Math.min(score, 100));
    setPasswordSteps(steps);
  };

  // Hàm lấy màu sắc dựa trên độ mạnh mật khẩu
  const getPasswordColor = () => {
    if (passwordStrength < 40) return "#ff4d4f";
    if (passwordStrength < 70) return "#faad14";
    return "#52c41a";
  };

  // Hàm lấy text mô tả độ mạnh
  const getPasswordText = () => {
    if (passwordStrength < 40) return "Yếu";
    if (passwordStrength < 70) return "Trung bình";
    return "Mạnh";
  };

  // Hàm xử lý khi form gửi thành công
  const onFinish = (values: any) => {
    console.log("Thành công:", values);
    message.success(
      "Gửi biểu mẫu thành công! Kiểm tra console để xem giá trị."
    );
  };

  // Hàm xử lý khi form đăng ký thành công
  const onFinishRegister = (values: any) => {
    console.log("Đăng ký thành công:", values);
    message.success("Đăng ký tài khoản thành công!");
  };

  // Hàm xử lý khi form gửi thất bại
  const onFinishFailed = (errorInfo: any) => {
    console.log("Thất bại:", errorInfo);
    message.error("Gửi biểu mẫu thất bại.");
  };

  // Xử lý dữ liệu upload file
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  // Xử lý khi chọn màu sắc
  const handleColorChange = (values: string[]) => {
    setSelectedColors(values);
    message.info(`Đã chọn ${values.length} màu: ${values.join(", ")}`);
  };

  // Xử lý khi chọn ngày từ DatePicker
  const handleDateSelect = (date: any, dateString: string) => {
    if (date && dateString) {
      // Kiểm tra xem ngày đã được chọn chưa
      if (!selectedDates.includes(dateString)) {
        const newDates = [...selectedDates, dateString];
        setSelectedDates(newDates);
        message.success(`Đã thêm ngày: ${dateString}`);
      } else {
        message.warning(`Ngày ${dateString} đã được chọn trước đó!`);
      }
    }
  };

  // Xóa ngày khỏi danh sách đã chọn
  const removeDateFromList = (dateToRemove: string) => {
    const newDates = selectedDates.filter((date) => date !== dateToRemove);
    setSelectedDates(newDates);
    message.info(`Đã xóa ngày: ${dateToRemove}`);
  };

  // Render option cho color select
  const renderColorOption = (option: any) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div
        style={{
          width: "16px",
          height: "16px",
          backgroundColor: option.color,
          borderRadius: "50%",
          border: "1px solid #d9d9d9",
        }}
      />
      <span>{option.label}</span>
    </div>
  );

  // Các bước đánh giá mật khẩu
  const passwordStepsData = [
    {
      title: "Yếu",
      description: "Ít nhất 8 ký tự",
    },
    {
      title: "Trung bình",
      description: "Có chữ hoa và số",
    },
    {
      title: "Mạnh",
      description: "Có ký tự đặc biệt",
    },
    {
      title: "Rất mạnh",
      description: "Đầy đủ tiêu chí",
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      {/* Tiêu đề chính */}
      <Title level={2}>Các thành phần Form</Title>

      {/* Form đăng ký */}
      <Card title="Biểu mẫu đăng ký tài khoản">
        <Form
          name="register"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinishRegister}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Tài khoản"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tài khoản!" },
              { min: 3, message: "Tài khoản phải có ít nhất 3 ký tự!" },
            ]}
          >
            <Input placeholder="Nhập tài khoản" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              { min: 8, message: "Mật khẩu phải có ít nhất 8 ký tự!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Nhập mật khẩu"
              onChange={(e) => calculatePasswordStrength(e.target.value)}
            />
            {/* Progress bar đánh giá mật khẩu ngay dưới input */}
            {passwordStrength > 0 && (
              <div style={{ marginTop: 6 }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: 4 }}>
                  {Array.from({ length: 10 }, (_, index) => (
                    <div
                      key={index}
                      style={{
                        flex: 1,
                        height: "4px",
                        backgroundColor:
                          (index + 1) * 10 <= passwordStrength
                            ? getPasswordColor()
                            : "#f0f0f0",
                        borderRadius: "2px",
                      }}
                    />
                  ))}
                </div>
                <Text
                  style={{
                    color: getPasswordColor(),
                    fontWeight: "bold",
                    fontSize: "12px",
                    display: "block",
                  }}
                >
                  {getPasswordText()}
                </Text>
              </div>
            )}
          </Form.Item>

          <Form.Item
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Vui lòng nhập lại mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu không khớp!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Nhập lại mật khẩu" />
          </Form.Item>

          <Form.Item
            name="agree"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("Vui lòng đồng ý với điều khoản!")
                      ),
              },
            ]}
          >
            <Checkbox>Tôi đồng ý với điều khoản sử dụng</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Form cơ bản với kiểm tra hợp lệ */}
      <Card title="Biểu mẫu đăng nhập">
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
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Các thành phần form nâng cao */}
      <Card title="Thành phần biểu mẫu nâng cao">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Chọn quốc gia">
            <Select placeholder="Chọn quốc gia">
              <Option value="vietnam">Việt Nam</Option>
              <Option value="china">Trung Quốc</Option>
              <Option value="usa">Hoa Kỳ</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Chọn ngày">
            <DatePicker
              placeholder="Chọn ngày"
              onChange={handleDateSelect}
              style={{ width: "100%" }}
              format="DD/MM/YYYY"
            />
          </Form.Item>

          <Form.Item label="Danh sách ngày đã chọn">
            <div style={{ minHeight: "40px" }}>
              {selectedDates.length > 0 ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {selectedDates.map((date, index) => (
                    <Tag
                      key={index}
                      closable
                      onClose={() => removeDateFromList(date)}
                      icon={<CalendarOutlined />}
                      color="blue"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "4px 8px",
                      }}
                    >
                      {date}
                    </Tag>
                  ))}
                </div>
              ) : (
                <span style={{ color: "#999", fontStyle: "italic" }}>
                  Chưa chọn ngày nào. Hãy chọn ngày từ DatePicker bên trên.
                </span>
              )}
            </div>
          </Form.Item>

          <Form.Item label="Chọn nhiều màu sắc" name="colors">
            <Select
              mode="multiple"
              placeholder="Chọn màu sắc yêu thích"
              onChange={handleColorChange}
              style={{ width: "100%" }}
              options={colorOptions.map((option) => ({
                label: renderColorOption(option),
                value: option.value,
              }))}
              tagRender={(props) => {
                const { value, closable, onClose } = props;
                const color = colorOptions.find(
                  (c) => c.value === value
                )?.color;
                return (
                  <Tag
                    color={color}
                    closable={closable}
                    onClose={onClose}
                    style={{
                      marginRight: 3,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <BgColorsOutlined />
                    {colorOptions.find((c) => c.value === value)?.label}
                  </Tag>
                );
              }}
            />
          </Form.Item>

          <Form.Item label="Hiển thị màu đã chọn">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {selectedColors.length > 0 ? (
                selectedColors.map((colorValue) => {
                  const colorOption = colorOptions.find(
                    (c) => c.value === colorValue
                  );
                  return (
                    <Tag
                      key={colorValue}
                      color={colorOption?.color}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <BgColorsOutlined />
                      {colorOption?.label}
                    </Tag>
                  );
                })
              ) : (
                <span style={{ color: "#999", fontStyle: "italic" }}>
                  Chưa chọn màu nào
                </span>
              )}
            </div>
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

      {/* Tree component hiển thị dữ liệu từ tablesSlice */}
      <Card title="Cây phân cấp dữ liệu người dùng">
        <div style={{ marginBottom: 16 }}>
          <Text type="secondary">
            Cấu trúc phân cấp: Danh sách người dùng → Tên người dùng → Thông tin
            chi tiết
          </Text>
        </div>
        <Tree
          showIcon
          defaultExpandAll
          defaultSelectedKeys={["0-0-0"]}
          switcherIcon={<TeamOutlined />}
          treeData={treeData}
          onSelect={(selectedKeys, info) => {
            console.log("Selected:", selectedKeys, info);
            const nodeData = (info.node as any).data;
            if (nodeData) {
              message.info(`Đã chọn: ${nodeData.name} - ${nodeData.address}`);
            }
          }}
          style={{
            backgroundColor: "#fafafa",
            padding: "16px",
            borderRadius: "6px",
            border: "1px solid #d9d9d9",
          }}
        />
      </Card>

      {/* Components nâng cao */}
      <Card title="Các component nâng cao khác">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <div>
                <Text strong>Progress Bar & Steps:</Text>
                <Progress
                  percent={passwordStrength}
                  status={
                    passwordStrength < 40
                      ? "exception"
                      : passwordStrength < 70
                      ? "normal"
                      : "success"
                  }
                />
                <Steps current={currentStep} style={{ marginTop: 16 }}>
                  <Steps.Step
                    title="Bước 1"
                    description="Nhập thông tin"
                    icon={<UserOutlined />}
                  />
                  <Steps.Step
                    title="Bước 2"
                    description="Xác thực"
                    icon={<CheckCircleOutlined />}
                  />
                  <Steps.Step
                    title="Bước 3"
                    description="Hoàn thành"
                    icon={<TrophyOutlined />}
                  />
                </Steps>
                <Button
                  type="primary"
                  onClick={() => setCurrentStep((prev) => (prev + 1) % 3)}
                  style={{ marginTop: 8 }}
                >
                  Bước tiếp theo
                </Button>
              </div>

              <Divider />

              <div>
                <Text strong>Slider & Rate:</Text>
                <div style={{ marginTop: 8 }}>
                  <Text>Độ hài lòng: {sliderValue}%</Text>
                  <Slider
                    value={sliderValue}
                    onChange={setSliderValue}
                    tooltip={{ formatter: (value) => `${value}%` }}
                  />
                </div>
                <div style={{ marginTop: 16 }}>
                  <Text>Đánh giá: </Text>
                  <Rate
                    value={ratingValue}
                    onChange={setRatingValue}
                    character={<HeartOutlined />}
                  />
                  <Text style={{ marginLeft: 8 }}>({ratingValue} sao)</Text>
                </div>
              </div>
            </Space>
          </Col>

          <Col span={12}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <div>
                <Text strong>TimePicker & Cascader:</Text>
                <div style={{ marginTop: 8 }}>
                  <TimePicker
                    placeholder="Chọn thời gian"
                    style={{ width: "100%", marginBottom: 8 }}
                    suffixIcon={<ClockCircleOutlined />}
                  />
                  <Cascader
                    options={cascaderOptions}
                    placeholder="Chọn tỉnh/thành - quận/huyện"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <Divider />

              <div>
                <Text strong>AutoComplete & Mentions:</Text>
                <div style={{ marginTop: 8 }}>
                  <AutoComplete
                    options={autoCompleteData.map((item) => ({ value: item }))}
                    placeholder="Nhập địa chỉ..."
                    style={{ width: "100%", marginBottom: 8 }}
                    onSearch={(text) => {
                      const filtered = autoCompleteData.filter((item) =>
                        item.toLowerCase().includes(text.toLowerCase())
                      );
                      setAutoCompleteOptions(
                        filtered.map((item) => ({ value: item }))
                      );
                    }}
                  />
                  <Mentions
                    placeholder="Nhập @username để mention"
                    style={{ width: "100%" }}
                    options={[
                      { value: "admin", label: "Admin" },
                      { value: "user1", label: "User 1" },
                      { value: "user2", label: "User 2" },
                    ]}
                  />
                </div>
              </div>
            </Space>
          </Col>
        </Row>

        <Divider />

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Text strong>Transfer Component:</Text>
            <Transfer
              dataSource={mockTransferData}
              targetKeys={targetKeys}
              onChange={(keys) => setTargetKeys(keys)}
              render={(item) => item.title}
              style={{ marginTop: 16 }}
            />
          </Col>
        </Row>

        <Divider />

        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card size="small" title="Thống kê">
              <Statistic
                title="Người dùng online"
                value={1128}
                prefix={<UserOutlined />}
                suffix="/ 1000"
              />
              <Statistic
                title="Doanh thu"
                value={112893}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix="$"
                suffix={<TrophyOutlined />}
              />
            </Card>
          </Col>

          <Col span={8}>
            <Card size="small" title="Timeline">
              <Timeline>
                <Timeline.Item color="green" dot={<ClockCircleOutlined />}>
                  Tạo dự án 2023-01-01
                </Timeline.Item>
                <Timeline.Item color="red" dot={<WarningOutlined />}>
                  Gặp sự cố 2023-01-02
                </Timeline.Item>
                <Timeline.Item dot={<CheckCircleOutlined />}>
                  Hoàn thành 2023-01-03
                </Timeline.Item>
              </Timeline>
            </Card>
          </Col>

          <Col span={8}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Badge count={5} offset={[10, 0]}>
                <Avatar shape="square" size="large" icon={<UserOutlined />} />
              </Badge>

              <Tooltip title="Thông tin chi tiết">
                <Button icon={<InfoCircleOutlined />}>
                  Hover để xem tooltip
                </Button>
              </Tooltip>

              <Popover
                content={
                  <div>
                    <p>Nội dung Popover</p>
                    <Button size="small">Hành động</Button>
                  </div>
                }
                title="Tiêu đề Popover"
              >
                <Button icon={<QuestionCircleOutlined />}>
                  Click để xem popover
                </Button>
              </Popover>
            </Space>
          </Col>
        </Row>

        <Divider />

        <Space>
          <Button
            type="primary"
            icon={<RocketOutlined />}
            onClick={() => setDrawerVisible(true)}
          >
            Mở Drawer
          </Button>

          <Button icon={<GiftOutlined />} onClick={() => setModalVisible(true)}>
            Mở Modal
          </Button>

          <Button
            icon={<ThunderboltOutlined />}
            onClick={() => {
              Modal.info({
                title: "Thông báo nhanh",
                content: "Đây là modal info nhanh!",
                icon: <InfoCircleOutlined />,
              });
            }}
          >
            Modal nhanh
          </Button>
        </Space>

        <div style={{ marginTop: 16 }}>
          <Alert
            message="Thông báo thành công"
            description="Đây là mô tả chi tiết cho thông báo thành công."
            type="success"
            showIcon
            closable
            style={{ marginBottom: 8 }}
          />

          <Alert
            message="Cảnh báo"
            description="Hãy kiểm tra lại thông tin trước khi tiếp tục."
            type="warning"
            showIcon
            action={
              <Button size="small" type="text">
                Xem chi tiết
              </Button>
            }
          />
        </div>
      </Card>

      {/* Drawer */}
      <Drawer
        title="Drawer với nhiều nội dung"
        placement="right"
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        width={400}
      >
        <Descriptions title="Thông tin người dùng" bordered>
          <Descriptions.Item label="Tên">Nguyễn Văn A</Descriptions.Item>
          <Descriptions.Item label="Email">user@example.com</Descriptions.Item>
          <Descriptions.Item label="Điện thoại">0123456789</Descriptions.Item>
          <Descriptions.Item label="Địa chỉ" span={3}>
            123 Đường ABC, Quận XYZ, TP.HCM
          </Descriptions.Item>
        </Descriptions>

        <Divider />

        <Spin tip="Đang tải dữ liệu...">
          <div style={{ padding: "50px 0", textAlign: "center" }}>
            <Text>Nội dung sẽ được tải...</Text>
          </div>
        </Spin>
      </Drawer>

      {/* Modal */}
      <Modal
        title="Modal với form"
        open={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        okText="Xác nhận"
        cancelText="Hủy"
      >
        <Form layout="vertical">
          <Form.Item label="Họ và tên" required>
            <Input placeholder="Nhập họ và tên" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item label="Email" required>
            <Input placeholder="Nhập email" prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item label="Số điện thoại">
            <Input
              placeholder="Nhập số điện thoại"
              prefix={<PhoneOutlined />}
            />
          </Form.Item>
        </Form>
      </Modal>
    </Space>
  );
};

export default FormDemo;
