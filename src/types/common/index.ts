/**
 * Common interfaces được sử dụng xuyên suốt ứng dụng
 */

// Base interface cho các entity có ID
export interface BaseEntity {
  key: string;
  createdAt?: string;
  updatedAt?: string;
}

// Upload file interface
export interface UploadFile {
  uid: string;
  name: string;
  status: "done" | "uploading" | "error" | "removed";
  url?: string;
  originFileObj?: File;
  size?: number;
  type?: string;
}

// API Response wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
  code?: number;
}

// Pagination interface
export interface PaginationConfig {
  current: number;
  pageSize: number;
  total: number;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
}

// Filter và Sort options
export interface FilterOption {
  text: string;
  value: string | number;
}

export interface SortConfig {
  field: string;
  order: "ascend" | "descend" | null;
}

// Table settings chung
export interface TableSettings {
  showBorder: boolean;
  size: "small" | "middle" | "large";
  showHeader: boolean;
  pagination: boolean | PaginationConfig;
}

// Date range interface
export interface DateRange {
  start: string | null;
  end: string | null;
}

// Address interface
export interface Address {
  street?: string;
  city?: string;
  district?: string;
  ward?: string;
  zipCode?: string;
  country?: string;
  fullAddress: string;
}

// Contact information
export interface ContactInfo {
  phone: string;
  email: string;
  address: Address | string;
}

// Status enum và interface
export enum EntityStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  SUSPENDED = "suspended",
}

export interface StatusInfo {
  status: EntityStatus;
  lastActive?: string;
  note?: string;
}
