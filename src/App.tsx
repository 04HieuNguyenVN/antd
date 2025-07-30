// App.tsx
import React from "react";
import { configure } from "mobx"; // ✅ fix lỗi mobx nhiều bản
import {
  BrowserRouter, // Hoặc thay bằng: HashRouter nếu muốn an toàn hơn
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ConfigProvider } from "antd";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import FormDemo from "./pages/FormDemo";
import DataDisplayDemo from "./pages/DataDisplayDemo";
import NavigationDemo from "./pages/NavigationDemo";
import FeedbackDemo from "./pages/FeedbackDemo";
import LayoutComponentsDemo from "./pages/LayoutComponentsDemo";
import TablesDemo from "./pages/TablesDemo";
import OtherComponentsDemo from "./pages/OtherComponentsDemo";
import DataEntryDemo from "./pages/DataEntryDemo";
import UserDetail from "./pages/UserDetail";
import AmisEditor from "./pages/AmisEditorDemo";
import "antd/dist/antd.css";

configure({ isolateGlobalState: true });

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <BrowserRouter>
        {" "}
        {/* Nếu bạn vẫn gặp lỗi reload: chuyển thành <HashRouter> */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="forms" element={<FormDemo />} />
            <Route path="data-entry" element={<DataEntryDemo />} />
            <Route path="data-display" element={<DataDisplayDemo />} />
            <Route path="item/:id" element={<UserDetail />} />
            <Route path="navigation" element={<NavigationDemo />} />
            <Route path="feedback" element={<FeedbackDemo />} />
            <Route path="layout" element={<LayoutComponentsDemo />} />
            <Route path="tables" element={<TablesDemo />} />
            <Route path="other" element={<OtherComponentsDemo />} />
            <Route path="amis-editor" element={<AmisEditor />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
