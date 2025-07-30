/**
 * Component related interfaces
 */

import React from "react";
import { TableItem } from "../store";
import { PaginationConfig, FilterOption } from "../common";

// Component base props
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// User Detail component props
export interface UserDetailProps extends BaseComponentProps {
  userId?: string;
  editable?: boolean;
  onEdit?: (user: TableItem) => void;
  onDelete?: (userId: string) => void;
  onSave?: (user: TableItem) => void;
}

// User List component props
export interface UserListProps extends BaseComponentProps {
  data: TableItem[];
  loading?: boolean;
  pagination?: PaginationConfig;
  onEdit?: (user: TableItem) => void;
  onDelete?: (userId: string) => void;
  onView?: (user: TableItem) => void;
  onSelectionChange?: (selectedKeys: string[]) => void;
}

// Tables column configuration
export interface TablesColumnType {
  title: React.ReactNode;
  dataIndex: string;
  key: string;
  width?: number;
  fixed?: "left" | "right";
  render?: (value: any, record: TableItem, index: number) => React.ReactNode;
  sorter?: (a: TableItem, b: TableItem) => number | boolean;
  filters?: FilterOption[];
  onFilter?: (value: string | number, record: TableItem) => boolean;
  filterDropdown?: React.ReactNode;
  ellipsis?: boolean;
  align?: "left" | "center" | "right";
}

// Search component props
export interface SearchComponentProps extends BaseComponentProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  loading?: boolean;
  allowClear?: boolean;
}

// Filter component props
export interface FilterComponentProps extends BaseComponentProps {
  filters: FilterOption[];
  selectedValues?: (string | number)[];
  onFilter?: (values: (string | number)[]) => void;
  multiple?: boolean;
  title?: string;
}

// Modal component props
export interface ModalComponentProps extends BaseComponentProps {
  visible: boolean;
  title?: string;
  onOk?: () => void;
  onCancel?: () => void;
  confirmLoading?: boolean;
  width?: number;
  footer?: React.ReactNode;
  maskClosable?: boolean;
}

// Layout component props
export interface LayoutProps extends BaseComponentProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

// Navigation item interface
export interface NavigationItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: NavigationItem[];
  disabled?: boolean;
  hidden?: boolean;
}

// Breadcrumb item interface
export interface BreadcrumbItem {
  title: string;
  path?: string;
  icon?: React.ReactNode;
}

// Card component props
export interface CardComponentProps extends BaseComponentProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  cover?: React.ReactNode;
  actions?: React.ReactNode[];
  loading?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  size?: "default" | "small";
}

// Chart component props
export interface ChartComponentProps extends BaseComponentProps {
  data: any[];
  loading?: boolean;
  height?: number;
  type?: "line" | "bar" | "pie" | "area";
  config?: any;
}
