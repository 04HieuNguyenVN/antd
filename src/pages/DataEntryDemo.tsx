import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  TimePicker,
  Switch,
  Slider,
  Rate,
  Checkbox,
  Radio,
  Upload,
  Button,
  AutoComplete,
  Cascader,
  Mentions,
  TreeSelect,
  Typography,
  Space,
  Row,
  Col,
  Divider,
  message,
  Progress,
} from "antd";
import {
  UploadOutlined,
  InboxOutlined,
  HeartOutlined,
  StarOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Dragger } = Upload;

const DataEntryDemo = () => {
  const [form] = Form.useForm();
  const [sliderValue, setSliderValue] = useState(30);
  const [rateValue, setRateValue] = useState(0);
  const [fileList, setFileList] = useState<any[]>([]);
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<
    { value: string }[]
  >([]);

  // Dữ liệu cho AutoComplete
  const mockSearchResults = [
    "Burns Bay Road",
    "Downing Street",
    "Wall Street",
    "Đường Lê Lợi",
    "Đường Nguyễn Huệ",
    "Đường Trần Hưng Đạo",
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
            { value: "badinh", label: "Ba Đình" },
          ],
        },
        {
          value: "hcm",
          label: "TP.HCM",
          children: [
            { value: "dist1", label: "Quận 1" },
            { value: "dist3", label: "Quận 3" },
            { value: "dist7", label: "Quận 7" },
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

  // Dữ liệu cho TreeSelect
  const treeData = [
    {
      title: "Node1",
      value: "0-0",
      key: "0-0",
      children: [
        {
          title: "Child Node1",
          value: "0-0-0",
          key: "0-0-0",
        },
        {
          title: "Child Node2",
          value: "0-0-1",
          key: "0-0-1",
        },
      ],
    },
    {
      title: "Node2",
      value: "0-1",
      key: "0-1",
      children: [
        {
          title: "Child Node3",
          value: "0-1-0",
          key: "0-1-0",
        },
        {
          title: "Child Node4",
          value: "0-1-1",
          key: "0-1-1",
        },
      ],
    },
  ];

  // Xử lý AutoComplete
  const handleSearch = (value: string) => {
    const filteredOptions = mockSearchResults
      .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
      .map((item) => ({ value: item }));
    setAutoCompleteOptions(filteredOptions);
  };

  // Xử lý Upload
  const uploadProps = {
    name: "file",
    multiple: true,
    fileList,
    onChange: (info: any) => {
      setFileList(info.fileList);
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload: () => {
      return false; // Prevent actual upload
    },
  };

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    message.success("Form submitted successfully!");
  };

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Title level={2}>Data Entry Components</Title>

      {/* Basic Input Components */}
      <Card title="Basic Input Components">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Basic Input" name="basicInput">
                <Input placeholder="Enter text..." />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Password Input" name="password">
                <Input.Password placeholder="Enter password..." />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Search Input" name="search">
                <Input.Search
                  placeholder="Search..."
                  enterButton="Search"
                  onSearch={(value) => message.info(`Searching: ${value}`)}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Text Area" name="textarea">
                <TextArea rows={4} placeholder="Enter long text..." />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="AutoComplete" name="autocomplete">
                <AutoComplete
                  options={autoCompleteOptions}
                  onSearch={handleSearch}
                  placeholder="Type to search..."
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>

      {/* Number and Selection Components */}
      <Card title="Number & Selection Components">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Text strong>Input Number:</Text>
            <InputNumber
              min={1}
              max={100}
              defaultValue={3}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => {
                const parsed = value ? value.replace(/\$\s?|(,*)/g, "") : "0";
                return parsed as any;
              }}
              style={{ width: "100%", marginTop: 8 }}
            />
          </Col>
          <Col span={8}>
            <Text strong>Select:</Text>
            <Select
              defaultValue="option1"
              style={{ width: "100%", marginTop: 8 }}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
            />
          </Col>
          <Col span={8}>
            <Text strong>Multi Select:</Text>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%", marginTop: 8 }}
              placeholder="Please select"
              defaultValue={["option1"]}
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
            />
          </Col>
        </Row>

        <Divider />

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Text strong>Cascader:</Text>
            <Cascader
              options={cascaderOptions}
              onChange={(value) => console.log(value)}
              placeholder="Please select"
              style={{ width: "100%", marginTop: 8 }}
            />
          </Col>
          <Col span={12}>
            <Text strong>Tree Select:</Text>
            <TreeSelect
              showSearch
              style={{ width: "100%", marginTop: 8 }}
              value={undefined}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              placeholder="Please select"
              allowClear
              multiple
              treeDefaultExpandAll
              treeData={treeData}
            />
          </Col>
        </Row>
      </Card>

      {/* Date and Time Components */}
      <Card title="Date & Time Components">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Text strong>Date Picker:</Text>
            <DatePicker style={{ width: "100%", marginTop: 8 }} />
          </Col>
          <Col span={8}>
            <Text strong>Time Picker:</Text>
            <TimePicker style={{ width: "100%", marginTop: 8 }} />
          </Col>
          <Col span={8}>
            <Text strong>Date Range:</Text>
            <RangePicker style={{ width: "100%", marginTop: 8 }} />
          </Col>
        </Row>
      </Card>

      {/* Rating and Progress Components */}
      <Card title="Rating & Progress Components">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Text strong>Slider (Value: {sliderValue}):</Text>
            <Slider
              min={0}
              max={100}
              value={sliderValue}
              onChange={setSliderValue}
              tooltip={{ formatter: (value) => `${value}%` }}
              style={{ marginTop: 16 }}
            />
            <Progress percent={sliderValue} size="small" />
          </Col>
          <Col span={8}>
            <Text strong>Rate ({rateValue} stars):</Text>
            <div style={{ marginTop: 16 }}>
              <Rate value={rateValue} onChange={setRateValue} />
              <br />
              <Rate
                character={<HeartOutlined />}
                value={rateValue}
                style={{ color: "#ff6b6b", marginTop: 8 }}
              />
              <br />
              <Rate
                character={<StarOutlined />}
                value={rateValue}
                style={{ color: "#ffd700", marginTop: 8 }}
              />
            </div>
          </Col>
          <Col span={8}>
            <Text strong>Switch:</Text>
            <div style={{ marginTop: 16 }}>
              <Switch defaultChecked />
              <br />
              <Switch size="small" defaultChecked style={{ marginTop: 8 }} />
              <br />
              <Switch
                checkedChildren="开"
                unCheckedChildren="关"
                defaultChecked
                style={{ marginTop: 8 }}
              />
            </div>
          </Col>
        </Row>
      </Card>

      {/* Choice Components */}
      <Card title="Choice Components">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Text strong>Checkbox Group:</Text>
            <Checkbox.Group
              options={[
                { label: "Apple", value: "Apple" },
                { label: "Pear", value: "Pear" },
                { label: "Orange", value: "Orange" },
              ]}
              defaultValue={["Apple"]}
              style={{ marginTop: 8 }}
            />
          </Col>
          <Col span={12}>
            <Text strong>Radio Group:</Text>
            <Radio.Group defaultValue="a" style={{ marginTop: 8 }}>
              <Radio.Button value="a">Hangzhou</Radio.Button>
              <Radio.Button value="b">Shanghai</Radio.Button>
              <Radio.Button value="c">Beijing</Radio.Button>
              <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </Card>

      {/* Advanced Components */}
      <Card title="Advanced Components">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Text strong>Color Picker:</Text>
            <div style={{ marginTop: 8 }}>
              <div
                style={{
                  padding: 8,
                  border: "1px solid #d9d9d9",
                  borderRadius: 4,
                  textAlign: "center",
                }}
              >
                ColorPicker không có sẵn trong Ant Design v4
              </div>
            </div>
          </Col>
          <Col span={16}>
            <Text strong>Mentions:</Text>
            <Mentions
              style={{ width: "100%", marginTop: 8 }}
              placeholder="You can use @ to mention someone"
              prefix="@"
              options={[
                { value: "afc163", label: "afc163" },
                { value: "zombieJ", label: "zombieJ" },
                { value: "yesmeck", label: "yesmeck" },
              ]}
            />
          </Col>
        </Row>

        <Divider />

        <Text strong>Upload Components:</Text>
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col span={12}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </Col>
          <Col span={12}>
            <Dragger {...uploadProps} style={{ padding: "20px" }}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Dragger>
          </Col>
        </Row>
      </Card>

      {/* Form Actions */}
      <Card>
        <Form.Item>
          <Space>
            <Button type="primary" onClick={() => form.submit()}>
              Submit Form
            </Button>
            <Button onClick={() => form.resetFields()}>Reset</Button>
            <Button
              type="dashed"
              onClick={() => {
                form.setFieldsValue({
                  basicInput: "Sample text",
                  password: "123456",
                  search: "Sample search",
                });
                message.info("Form filled with sample data");
              }}
            >
              Fill Sample Data
            </Button>
          </Space>
        </Form.Item>
      </Card>
    </Space>
  );
};

export default DataEntryDemo;
