/**
 * Form related interfaces
 */

import { UploadFile } from "../common";
import type { Dayjs } from "dayjs";

// User form values
export interface UserFormValues {
  name: string;
  birthDate: Dayjs | null;
  age?: number;
  address: string;
  phone: string;
  email: string;
  avatar?: string | null;
}

// User create form (without key)
export interface UserCreateFormValues extends Omit<UserFormValues, "age"> {
  password?: string;
  confirmPassword?: string;
}

// User update form
export interface UserUpdateFormValues extends Partial<UserFormValues> {
  key: string;
}

// Login form
export interface LoginFormValues {
  username: string;
  password: string;
  remember?: boolean;
}

// Registration form
export interface RegisterFormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone?: string;
  agreement: boolean;
}

// Profile form
export interface ProfileFormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar?: UploadFile[];
  bio?: string;
  website?: string;
  birthDate?: Dayjs | null;
}

// Search form
export interface SearchFormValues {
  keyword?: string;
  category?: string;
  dateRange?: [Dayjs, Dayjs] | null;
  status?: string[];
  priceRange?: [number, number];
}

// Contact form
export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  attachments?: UploadFile[];
}

// Form validation rules
export interface FormRule {
  required?: boolean;
  message?: string;
  min?: number;
  max?: number;
  pattern?: RegExp;
  validator?: (rule: any, value: any) => Promise<void>;
}

// Form field configuration
export interface FormFieldConfig {
  name: string;
  label: string;
  type:
    | "input"
    | "textarea"
    | "select"
    | "datepicker"
    | "upload"
    | "checkbox"
    | "radio";
  rules?: FormRule[];
  placeholder?: string;
  options?: Array<{ label: string; value: any }>;
  disabled?: boolean;
  hidden?: boolean;
}
