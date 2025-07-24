// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import store from "./store";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import FormDemo from "./pages/FormDemo";
import DataDisplayDemo from "./pages/DataDisplayDemo";
import NavigationDemo from "./pages/NavigationDemo";
import FeedbackDemo from "./pages/FeedbackDemo";
import LayoutComponentsDemo from './pages/LayoutComponentsDemo';
import TablesDemo from './pages/TablesDemo';
import OtherComponentsDemo from './pages/OtherComponentsDemo';
import "antd/dist/reset.css";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="forms" element={<FormDemo />} />
              <Route path="data-display" element={<DataDisplayDemo />} />
              <Route path="navigation" element={<NavigationDemo />} />
              <Route path="feedback" element={<FeedbackDemo />} />
              <Route path="layout" element={<LayoutComponentsDemo />} />
              <Route path="tables" element={<TablesDemo />} />
              <Route path="other" element={<OtherComponentsDemo />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
