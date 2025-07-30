/**
 * Main types export file
 * Tập hợp tất cả các interface từ các module con
 */

// Re-export common types
export * from "./common";

// Re-export store types
export * from "./store";

// Re-export form types
export * from "./forms";

// Re-export component types
export * from "./components";

// Legacy exports for backward compatibility (sẽ được remove dần)
// Deprecated: Use types from specific modules instead
export type { TableItem, TablesState, RootState } from "./store";
export type { UserFormValues } from "./forms";
export type { UserDetailProps, TablesColumnType } from "./components";
export type { UploadFile, TableSettings } from "./common";
