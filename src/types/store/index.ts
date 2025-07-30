/**
 * Redux Store related interfaces
 */

import { BaseEntity, ContactInfo, EntityStatus } from "../common";

// User/TableItem interface
export interface TableItem extends BaseEntity, ContactInfo {
  name: string;
  birthDate: string | null;
  age: number;
  avatar: string | null;
  status?: EntityStatus;
}

// Tables slice state
export interface TablesState {
  data: TableItem[];
  loading: boolean;
  error: string | null;
  filters: {
    search?: string;
    status?: EntityStatus;
    ageRange?: [number, number];
  };
  pagination: {
    current: number;
    pageSize: number;
    total: number;
  };
}

// Counter slice state (nếu có)
export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

// Root state interface
export interface RootState {
  tables: TablesState;
  counter?: CounterState;
}

// Action payload types
export interface UpdateItemPayload {
  key: string;
  data: Partial<TableItem>;
}

export interface DeleteItemPayload {
  key: string;
}

export interface AddItemPayload extends Omit<TableItem, "key"> {}

export interface SetFiltersPayload {
  search?: string;
  status?: EntityStatus;
  ageRange?: [number, number];
}

export interface SetPaginationPayload {
  current?: number;
  pageSize?: number;
  total?: number;
}
