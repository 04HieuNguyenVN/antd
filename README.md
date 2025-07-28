# 🎨 Ant Design Showcase

> Một ứng dụng demo toàn diện showcasing tất cả các component của Ant Design với React

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Ant Design](https://img.shields.io/badge/Ant%20Design-5.x-blue?logo=antdesign)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Mô tả

Ant Design Showcase là một ứng dụng React được xây dựng để demo tất cả các component của thư viện Ant Design. Dự án cung cấp các ví dụ thực tế, interactive và code samples cho từng component, giúp developers hiểu rõ cách sử dụng và tùy chỉnh Ant Design trong các dự án của họ.

## ✨ Tính năng nổi bật

### 🧩 Component Showcase

- **📊 Dashboard**: Tổng quan với statistics, charts và quick actions
- **📝 Forms**: Comprehensive form examples với validation
- **📥 Data Entry**: Tất cả input components (DatePicker, Select, Upload, etc.)
- **📋 Tables**: Advanced table với CRUD operations, search, filter
- **📺 Data Display**: List, Card, Image, Timeline, Tree, Calendar
- **💬 Feedback**: Modal, Notification, Progress, Alert, Drawer
- **🧭 Navigation**: Menu, Breadcrumb, Pagination, Steps
- **📐 Layout**: Grid system, Layout components, responsive design
- **🔧 Other**: Utility components và advanced features

### 🎯 Advanced Features

- **State Management**: Redux Toolkit integration
- **Responsive Design**: Mobile-first approach
- **Interactive Examples**: Live demos với real-time updates
- **Code Examples**: Clean, documented code samples
- **Search & Filter**: Advanced data manipulation
- **Real-time Updates**: Live statistics và notifications
- **Theme Support**: Customizable Ant Design theming

## 🚀 Demo

🔗 **[Live Demo](https://your-demo-link.com)** (Coming soon)

## 📦 Cài đặt

### Prerequisites

- Node.js >= 14.x
- npm hoặc yarn

### Clone repository

```bash
git clone https://github.com/04HieuNguyenVN/antd-showcase.git
cd antd-showcase/antd
```

### Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

### Khởi chạy development server

```bash
npm start
# hoặc
yarn start
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng trong browser.

## 🏗️ Cấu trúc dự án

```
antd-showcase/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # Reusable components
│   ├── layouts/            # Layout components
│   │   └── MainLayout.js   # Main application layout
│   ├── pages/              # Page components
│   │   ├── Dashboard.js    # Dashboard overview
│   │   ├── FormDemo.js     # Form examples
│   │   ├── DataEntryDemo.js # Data entry components
│   │   ├── TablesDemo.js   # Table examples với CRUD
│   │   ├── DataDisplayDemo.js # Data display components
│   │   ├── FeedbackDemo.js # Feedback components
│   │   ├── NavigationDemo.js # Navigation components
│   │   ├── LayoutComponentsDemo.js # Layout examples
│   │   └── OtherComponentsDemo.js # Other utilities
│   ├── store/              # Redux store
│   │   ├── index.js        # Store configuration
│   │   ├── tablesSlice.js  # Tables data management
│   │   └── counterSlice.js # Counter state
│   ├── App.js              # Main App component
│   ├── App.css             # Global styles
│   └── index.js            # Entry point
├── package.json
└── README.md
```

## 🛠️ Tech Stack

### Core Technologies

- **React 18** - UI library với hooks
- **Ant Design 5.x** - Enterprise-class UI design language
- **Redux Toolkit** - State management
- **React Router v6** - Client-side routing
- **JavaScript ES6+** - Modern JavaScript features

### Development Tools

- **Create React App** - Build tool và development setup
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📚 Component Coverage

### ✅ Đã implement (100+ components)

#### 📝 Data Entry (15+ components)

- [x] Input, Input.TextArea, Input.Search, Input.Password
- [x] InputNumber, Select, AutoComplete, Cascader
- [x] DatePicker, TimePicker, RangePicker
- [x] Upload, Dragger, ColorPicker
- [x] Rate, Slider, Switch, Radio, Checkbox
- [x] TreeSelect, Mentions

#### 📊 Data Display (20+ components)

- [x] Table với advanced features (search, filter, CRUD)
- [x] List với pagination, Card, Avatar
- [x] Tree với hierarchical data, Timeline
- [x] Tag, Badge, Tooltip, Popover
- [x] Image, Carousel, Calendar
- [x] Statistic, Descriptions, Empty
- [x] QRCode, Segmented, Collapse

#### 💬 Feedback (15+ components)

- [x] Alert, Modal, Message, Notification
- [x] Progress, Spin, Skeleton
- [x] Result, Drawer, Popconfirm
- [x] Tour, FloatButton, BackTop

#### 🧭 Navigation (10+ components)

- [x] Menu, Breadcrumb, Pagination
- [x] Steps, Tabs, Anchor, Affix

#### 📐 Layout (10+ components)

- [x] Layout (Header, Sider, Content, Footer)
- [x] Grid (Row, Col), Space, Divider
- [x] Flex, Watermark

## 🎯 Sử dụng

### Basic Usage

1. **Navigation**: Sử dụng sidebar để điều hướng giữa các trang demo
2. **Interactive Examples**: Thử nghiệm với các component trực tiếp trên trang
3. **Code Reference**: Xem source code để hiểu cách implement
4. **Responsive Testing**: Test trên các screen size khác nhau

### Advanced Features

- **Tables Demo**: Full CRUD operations với search và filter
- **Form Validation**: Advanced form validation examples
- **State Management**: Redux integration examples
- **Responsive Layout**: Mobile-first design patterns

## 🤝 Contributing

Chúng tôi hoan nghênh mọi contribution!

### Cách contribute:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

### Development Guidelines:

- Follow ESLint configuration
- Sử dụng Ant Design components và patterns
- Viết code có thể đọc và maintain được
- Test trên multiple screen sizes
- Document new features

## 📄 Scripts

```bash
# Development
npm start          # Khởi chạy development server
npm test           # Chạy test suite
npm run build      # Build production
npm run eject      # Eject từ Create React App (one-way operation)

# Linting & Formatting
npm run lint       # Chạy ESLint
npm run format     # Format code với Prettier
```

## 🔧 Configuration

### Environment Variables

Tạo file `.env.local` trong root directory:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_VERSION=1.0.0
```

### Ant Design Theme Customization

Customize theme trong `src/App.js`:

```javascript
import { ConfigProvider } from "antd";

const theme = {
  token: {
    colorPrimary: "#1890ff",
    borderRadius: 6,
  },
};

function App() {
  return <ConfigProvider theme={theme}>{/* Your app */}</ConfigProvider>;
}
```

## 📱 Browser Support

- ✅ Chrome >= 80
- ✅ Firefox >= 78
- ✅ Safari >= 13
- ✅ Edge >= 80
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Common Issues

**❓ Port 3001 đã được sử dụng**

```bash
# Sử dụng port khác
PORT=3001 npm start
```

**❓ Build errors**

```bash
# Clear cache và reinstall
rm -rf node_modules package-lock.json
npm install
```

**❓ Styling issues**

- Đảm bảo đã import `antd/dist/reset.css`
- Check CSS specificity conflicts

## 📈 Roadmap

### 🔮 Upcoming Features

- [ ] Dark/Light theme toggle
- [ ] Code playground với live editing
- [ ] Export component code
- [ ] Advanced chart integration
- [ ] More interactive examples
- [ ] Performance optimization
- [ ] Unit tests coverage
- [ ] Storybook integration

## 📞 Support

- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/04HieuNguyenVN/antd-showcase/issues)
- 📖 Documentation: [Ant Design Docs](https://ant.design/docs/react/introduce)

## 📄 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm thông tin.

## 🙏 Acknowledgments

- [Ant Design Team](https://ant.design/) - Amazing UI library
- [React Team](https://reactjs.org/) - Powerful UI framework
- [Create React App](https://create-react-app.dev/) - Awesome build tool
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management

---

⭐ **Nếu dự án này hữu ích, hãy cho chúng tôi một star!** ⭐

Made with ❤️ by [04HieuNguyenVN](https://github.com/04HieuNguyenVN)
